import React, { Component, } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import NavigationBar from 'react-native-navbar';

const ios = Platform.OS === 'ios';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0879DF",
  },
  title: {
    alignSelf: ios ? "center" : "flex-start",
    marginTop: ios ? 30 : 15,
    marginBottom: ios ? 10 : 15,
    marginLeft: ios ? 0 : 15,
    fontSize: ios ? 16 : 20,
    color: 'white'
  }
});
