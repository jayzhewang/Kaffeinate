import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import styles from './assets/stylesheets/application.js';

export default class Kaffeinate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is the Kaffeinate app.
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Kaffeinate', () => Kaffeinate);
