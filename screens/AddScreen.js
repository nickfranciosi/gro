import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: "",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Show actions instead of new page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
