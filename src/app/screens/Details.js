import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, Button, Image} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

export default class Details extends Component{
  render() {
    const item = this.props.navigation.getParam('item');

  return(
    <ScrollView>
      <Card.Cover source={{ uri: item.uri }} />  
      <Text style={styles.welcome}>{item.name}</Text>
      <Text style={styles.welcome}>{item.phoneNumber}</Text>
      <Text style={styles.welcome}>{item.status}</Text>
      <Button title='Go home' onPress={() => this.props.navigation.navigate('Home')}></Button>
    </ScrollView>


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
