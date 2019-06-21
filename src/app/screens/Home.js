import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import Cards from '../components/Cards';
import FABButton from '../components/Button';

export default class Home extends Component {

  render() {
    let card = [
      {
        id: 0,
        name: 'Camera card',
        phoneNumber: '0210210211',
        status: 'Completed',
        uri: 'https://picsum.photos/id/355/700/700'
      },
      {
        id: 1,
        name: 'Other card',
        phoneNumber: '01212121212',
        status: 'Completed',
        uri: 'https://picsum.photos/id/365/700/700'
      }
    ]

    return (
      <View>
        <ScrollView>
          <Cards tasks={card} navigation={this.props.navigation} />
        </ScrollView>
        <FABButton navigation={this.props.navigation} />
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
