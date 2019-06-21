import React, { Component } from 'react';
import Navigation from './src/app/navigation/AppNavigator'
import { createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}
