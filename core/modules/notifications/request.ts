import { createListenerMiddleware } from '@reduxjs/toolkit';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { authActions } from '../auth/reducer';
import { notificationToggle } from './actions';
import { notificationsApi } from './query';
import { notificationActions } from './reducer';

const registerForPushNotifications = async () => {
  let token: string = '';
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
};

export const notificationAwaiter = createListenerMiddleware();
export const notificationManualAwaiter = createListenerMiddleware();

const device = Device.modelName + '_' + Device.osVersion;

notificationAwaiter.startListening({
  actionCreator: authActions.completeAuth,
  effect: async (action, listenerApi) => {
    const token = await registerForPushNotifications();
    if (token) {
      listenerApi.dispatch(notificationsApi.endpoints.installPushToken.initiate({ token, device }));
      listenerApi.dispatch(notificationActions.allowNotifications(true));
    }
  },
});
notificationManualAwaiter.startListening({
  actionCreator: notificationToggle,
  effect: async (action, listenerApi) => {
    const token = await registerForPushNotifications();
    if (token) {
      listenerApi.dispatch(notificationsApi.endpoints.installPushToken.initiate({ token, device }));
      listenerApi.dispatch(notificationActions.allowNotifications(true));
    }
  },
});
