import React, {Component} from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { Card } from 'react-native-paper';


export default class Details extends Component{
  render() {
    const item = this.props.navigation.getParam('item');

  return(
    <ScrollView>
      <Card.Cover source={{ uri: item.uri }} />  
      <Text >{item.name}</Text>
      <Text >{item.phoneNumber}</Text>
      <Text >{item.status}</Text>
      <Button title='Go home' onPress={() => this.props.navigation.navigate('Home')}></Button>
    </ScrollView>


  );
  }
}

