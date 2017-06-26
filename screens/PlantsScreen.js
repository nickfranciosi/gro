import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class PlantsScreen extends React.Component {
  static navigationOptions = {
    title: 'Plants',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Show Users crops</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
