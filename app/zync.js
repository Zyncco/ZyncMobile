import React, { Component } from 'react'
import { Navigator } from 'react-native';
import IntroView from './intro.js';
import PreferenceView from './preference_view.js';
import {GoogleSignin} from 'react-native-google-signin';
import * as signIn from './sign_in.js';
import * as firebase from 'firebase';

export const routes = [
      {index: 0}, // intro
      {index: 1}, // sign in
      {index: 2}, // sign in loading
      {index: 3}, // preferences
];
export var currentNagivator = null;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA468GT4W0147Oz-uClJo0RCingBRo8q8A",
  authDomain: "zync-b3bce.firebaseapp.com",
  databaseURL: "https://zync-b3bce.firebaseio.com",
  projectId: "zync-b3bce",
  storageBucket: "zync-b3bce.appspot.com",
  messagingSenderId: "3961871122"
};

firebase.initializeApp(config);

GoogleSignin.configure({
  iosClientId: "3961871122-2e2nr63l7rqm58j2qsh3h159adddq0ih.apps.googleusercontent.com", // only for iOS
}).done();

export class InitialView extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[3]}
        initialRouteStack={routes}
        renderScene={this.renderNavigator}/>
    )
  }

  renderNavigator(route, navigator) {
    currentNagivator = navigator;

    switch (route.index) {
      case 0:
        return (<IntroView />)

      case 1:
        return (<signIn.SignInView />)

      case 2:
        return (<signIn.LoadingView />)

      case 3:
        return (<PreferenceView />)
    }
  }
}
