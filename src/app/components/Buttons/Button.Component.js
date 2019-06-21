import React, { Component } from 'react';
import { FAB } from 'react-native-paper';
import btnStyle from './Button.Style';

export default class FABButton extends Component {
  render() {
    return (
      <FAB
        style={btnStyle.fab}
        small
        icon="add"
        onPress={() => this.props.navigation.navigate('CreateCard')} />
    )
  }
}
