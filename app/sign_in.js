import React, { Component, } from 'react'
import { View, StyleSheet, Image, Text, Button, ActivityIndicator, Alert } from 'react-native'
import * as zync from './zync.js'
import * as firebase from 'firebase';
import * as zyncMessaging from './messaging_handler.js';
import FCM from 'react-native-fcm';
import ZyncAPI from './api/zync_api.js';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export class SignInView extends Component {
  render() {
    GoogleSignin.hasPlayServices({ autoResolve: true });

    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          accessibilityLabel="App logo"
          source={{uri: 'https://github.com/Zyncco/Android-App/blob/master/app/src/main/res/drawable/logo.png?raw=true'}}
          resizeMode="contain"/>
        <Text style={styles.name}>Zync</Text>
        <Text style={styles.caption}>End-to-end encrypted cloud clipboard synchronization</Text>
        <GoogleSigninButton
          style={{width: 200, height: 48}}
          size={GoogleSigninButton.Size.Wide} onPress={this.signIn}/>
      </View>
    )
  }

  signIn() {
    GoogleSignin.signIn().then(function(user) {
      var firebaseCredential = firebase.auth.GoogleAuthProvider.credential(user.idToken);

      zync.currentNagivator.jumpTo(zync.routes[2]);
      firebase.auth().signInWithCredential(firebaseCredential).then((firebaseUser) => {
        firebaseUser.getToken(true).then((token) => {
          FCM.requestPermissions(); // cloud messaging permission for iOS

          FCM.getFCMToken().then((messagingToken) => {
            zyncMessaging.register(messagingToken);
            ZyncAPI.startApi(messagingToken, token);
          });
        });
      });
    }).done();
  }
}

export class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container} >
        <ActivityIndicator color="#FF4081" size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  /* Sigh In View */
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 20,
  },
  name: {
    fontSize: 20
  },
  caption: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8c8c8c',
    marginTop: 8,
    marginBottom: 240
  }
})
