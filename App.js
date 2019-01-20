/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native'

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
                <View style={styles.header}>

                    <Text>
                        hi
                    </Text>
                </View>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <View style={styles.footer}>
                    <Text>bye</Text>
                    <Text>bye</Text>
                    <Text>bye</Text>
                    <Text>bye</Text>
                    <Text>bye</Text>
                    <Text>bye</Text>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'red',
    },
    header: {
        flex: 2,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'stretch',
        // fontSize: 20,
        textAlign: 'center',
        // margin: 10,
    },
    instructions: {
        flex: 10,
        textAlign: 'center',
        // color: 'green',
        // marginBottom: 5,
        backgroundColor: 'yellow',
    },
    footer: {

        flex: 1,
        backgroundColor: 'gray',

    }
});
