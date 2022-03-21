import { createListenerMiddleware } from '@reduxjs/toolkit';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { authActions } from '../auth/reducer';
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
      console.debug('Failed to get push token for push notification!');
      return;
    }
    console.debug(token);
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    console.debug('Must use physical device for Push Notifications');
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
    // Can cancel other running instances
    // listenerApi.cancelActiveListeners();
    // TODO: this needs to study hard the fq docs about certificates and keys
    // Run async logic
    // const token = await registerForPushNotifications();
    // if (token) {
    //   notificationsApi.endpoints.installPushToken.initiate({ token, userId: action.payload.userId });
    // }
  },
});