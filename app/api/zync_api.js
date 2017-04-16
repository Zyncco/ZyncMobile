const apiDomain = "beta-api.zync.co";
const base = "https://beta-api.zync.co/v";
const version = 0;

export default class ZyncAPI {

  constructor(apiKey) {
    this.token = apiKey;
  }

  static startApi(deviceId, idToken) {
    fetch(base + version + "/user/authenticate", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          'device-id': deviceId,
          'firebase-token': idToken,
        }
      })
    });
    // if successful, the API will send us a message through messaging
    // and validate device will be called
  }

  static validateDevice(apiToken, deviceId, randomToken) {
    return new Promise((resolve, reject) => {
      fetch(base + version + "/device/validate", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            'device-id': deviceId,
            'random-token': randomToken,
          }
        })
      }).then((res) => {
        resolve(new ZyncAPI(apiToken));
      }).catch((error) => {
        reject(error);
      });
    })
  }
}
