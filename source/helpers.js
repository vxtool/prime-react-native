import { EventRegister } from 'react-native-event-listeners';
import { NativeModules, NativeEventEmitter } from 'react-native';

const { ReactEventManager } = NativeModules;

export const nativeDispatch = (event, body) => {
  if (ReactEventManager) {
    ReactEventManager.sendNotification(event, body);
  }
};

export const nativeListener = (event, callback) => {
  if (ReactEventManager) {
    const eventEmitter = new NativeEventEmitter(ReactEventManager);
    eventEmitter.addListener(event, callback);
  }
};

export const dispatchEvent = (event, detail) => {
  const eventBody = { detail };
  EventRegister.emit(event, eventBody);
};

export const nativeTrackState = (eventName, payload) => {
  if (ReactEventManager && ReactEventManager.trackState) {
    ReactEventManager.trackState(eventName, payload);
  }
};