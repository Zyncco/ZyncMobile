import React, { Component, } from 'react'
import { View, StyleSheet, Image, Text, Button } from 'react-native'
import * as zync from './zync.js'
import Swiper from 'react-native-swiper'

class IntroView extends Component {
  render() {
    return (
      <View>
        <Swiper showButtons={true} loop={false}>
          <FirstIntroView />
          <SecondIntroView callback={() => {
              this.props.navigator.jumpTo(zync.routes[1]);
            }} />
        </Swiper>
      </View>
    )
  }
}

export class FirstIntroView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width:  225 ,
            height:  225 ,
          }}
          resizeMode="contain"
          source={{uri:'https://github.com/Zyncco/Android-App/blob/master/app/src/main/res/drawable/zync_white.png?raw=true'}}
        />
        <Text style={styles.welcome}>Zync</Text>
        <Text style={styles.slogan}>End-to-end encrypted cloud clipboard</Text>
        <Text style={styles.description}>Welcome to Zync! Swipe left to continue!</Text>
      </View>
    );
  }
}

export class SecondIntroView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.cloud}
          resizeMode="contain"
          source={{uri:'https://github.com/Zyncco/Android-App/blob/master/app/src/main/res/drawable/zync_cloud.png?raw=true'}}
        />
        <Text style={styles.description}>Zync securely synchronizes the copy/paste function across all your devices,
          like phones, laptops, and tablets! Simply install, login, you're ready to go! Click the button belowteas
          to get started!</Text>
        <Button title="Start" color="white" onPress={this.props.callback} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  /* General */

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
  },

  /* Intro One */

  welcome: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    marginTop: 20
  },
  slogan: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    marginBottom: 225
  },
  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginBottom: 24
  },

  /* Intro Two */

  cloud: {
    width: 400,
    height: 350,
    marginBottom: 50
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 18,
    marginBottom: 15
  }
});

export default IntroView
