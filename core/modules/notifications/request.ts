import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { Platform } from 'react-native';
import { authActions } from '../auth/reducer';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { currentDevice } from 'core/constants';
import { notificationActions } from './reducer';
import { notificationsApi } from './query';

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

notificationAwaiter.startListening({
  actionCreator: authActions.completeAuth,
  effect: async (action, listenerApi) => {
    const token = await registerForPushNotifications();
    if (token) {
      listenerApi.dispatch(notificationsApi.endpoints.installPushToken.initiate({ token, device: currentDevice }));
      listenerApi.dispatch(notificationActions.allowNotifications(true));
    }
  },
});
