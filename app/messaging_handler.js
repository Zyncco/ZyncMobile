import * as firebase from 'firebase';
import FCM, {
  FCMEvent,
  RemoteNotificationResult,
  WillPresentNotificationResult,
  NotificationType
} from 'react-native-fcm';
import { Platform } from 'react-native';
import ZyncAPI from './api/zync_api.js';

var instanceId = null;
exports.register = function(instanceId) {
  this.instanceId = instanceId;

  FCM.on(FCMEvent.Notification, (notif) => {
    if (notif.opened_from_tray) {
      // handle open from tray
    }

    if (notif['zync-token'] !== null) {
      ZyncAPI.validateDevice(
        notif['zync-token'],
        instanceId,
        notif['random-token']
      ).then((api) => {
        // do stuff
        console.log("Finished logging in!");
      });
    }

    if (Platform.OS === 'ios') {
      switch(notif._notificationType) {
        case NotificationType.Remote:
          notif.finish(RemoteNotificationResult.NewData);
          break;
        case NotificationType.NotificationResponse:
          notif.finish();
          break;
        case NotificationType.WillPresent:
          notif.finish(WillPresentNotificationResult.All);
          break;
      }
    }
  });
}
