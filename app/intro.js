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
          <SecondIntroView callback={this.startApp} />
        </Swiper>
      </View>
    )
  }

  startApp() {
    zync.currentNagivator.jumpTo(zync.routes[1]);
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
          source={require('../resources/zync/zync_white.png')}
          />
        <Text style={styles.welcome}>{zync.lang.app}</Text>
        <Text style={styles.slogan}>{zync.lang.slogan}</Text>
        <Text style={styles.description}>{zync.lang.introWelcome}</Text>
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
          source={require('../resources/zync/zync_cloud.png')}
          />
        <Text style={styles.description}>{zync.lang.introDescription}</Text>
        <Button title={zync.lang.introStart} color="white" onPress={this.props.callback} />
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
