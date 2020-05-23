import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default class ViewMenu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Menu for today is:</Text>
                <Button title="Menu"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });