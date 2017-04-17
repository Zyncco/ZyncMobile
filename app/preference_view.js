import React, { Component, } from 'react'
import { View, StyleSheet, Text, Button, Platform } from 'react-native'
import ZyncConfig from './config.js';
import Header from './utils/header.js'
import Async from './utils/async_component.js';
import SettingsList from 'react-native-settings-list';

const ios = Platform.OS === 'ios';

export default class PreferenceView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Settings" />
        <View style={styles.container}>
          <SettingsList borderColor={ios ? '#c8c7cc' : '#d6d5d9'} >
            <SettingsList.Item hasNavArrow={false}
              title="Encryption"
              titleStyle={styles.headerTitle}
              itemWidth={25}
              borderHide={'Both'}
              />

            <SettingsList.Item hasNasArrow={ios}
              titleStyle={styles.itemTitle}
              title='Encryption Password'
              onPress={this.handleEncryptionPass} />

            {ios && (
              <SettingsList.Header headerStyle={{marginTop:5}} />
            )}

            <SettingsList.Item
              hasNavArrow={false} titleStyle={styles.headerTitle}
              itemWidth={25} borderHide={'Both'} title="Sync" />

            <SettingsList.Item hasNavArrow={false} hasSwitch={true}
              title="Sync Down"
              />

            {ios && (
                <SettingsList.Header headerStyle={{marginTop:5}} />
            )}

            <SettingsList.Item
              hasNavArrow={false} titleStyle={styles.headerTitle}
              itemWidth={25} borderHide={'Both'} title="Notifications" />

            <SettingsList.Item hasNavArrow={false} hasSwitch={true}
                title="Clipboard Change"
                />

            {ios && (
                    <SettingsList.Header headerStyle={{marginTop:5}} />
            )}

            <SettingsList.Item
              hasNavArrow={false} titleStyle={styles.headerTitle}
              itemWidth={25} borderHide={'Both'} title="Connectivity" />

            <SettingsList.Item hasNavArrow={false} hasSwitch={true}
                  title="Use on Data"
                  />

            <SettingsList.Item hasNasArrow={false}
                          titleStyle={styles.itemTitle}
                          title='Max Transfer Size'
                          onPress={this.handleEncryptionPass} />
          </SettingsList>
        </View>
      </View>
    )
  }

  handleGenericSwitch(key, newValue) {
    ZyncConfig.set(key, newValue);
    this.state[key] = newValue;
    return newValue;
  }

  handleEncryptionPass() {
    //
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ios ? "#EFEFF4" : "#f9f9f9",
    flex: 1,
  },
  headerTitle: {
    color: "#FF4081",
    marginTop: 10,
    fontWeight: "500"
  }
});
