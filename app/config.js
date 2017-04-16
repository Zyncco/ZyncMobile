import { AsyncStorage } from 'react-native'

const prefix = "@ZyncMobile:";

export default class ZyncConfig {
  static async syncUp() {
    return (await this.get("sync_up", "1")) == 1 ? true : false;
  }

  static async apiKey() {
    return await this.get("zync_api_token", "");
  }

  static setApiKey(apiKey) {
    set("zync_api_token", apiKey);
  }

  static async maxSize() {
    return await this.get("max_size", 0);
  }

  static async get(key, def) {
    const val = await AsyncStorage.getItem(prefix + key);

    if (val == null || val === 'undefined') {
      return def;
    }

    return val;
  }

  static set(key, value) {
    AsyncStorage.setItem(prefix + key, value.toString());
  }
}
