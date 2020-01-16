/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {View} from 'react-native';
import {Header, Text} from 'native-base';

import Contents from './Component/Contents';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: '#00F280'}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            KALKULATOR REACT NATIVE
          </Text>
        </Header>
        <Contents />
      </View>
    );
  }
}
