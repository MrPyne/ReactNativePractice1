import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Greeting name='Matt' />
      </View>
    );
  }
}
