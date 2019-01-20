/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>No Never !</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
          <Text style={styles.instructions2}>To get started, edit App.js</Text>
        </View>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,

flex:2,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'blue',
  },
  instructions: {
    flex:5,
    textAlign: 'center',
    color: 'yellow',
    marginBottom: 5,
    backgroundColor: 'green',
  },
  instructions2: {

    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
    backgroundColor: 'yellow',
  },
});
