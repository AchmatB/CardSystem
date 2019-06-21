import React, { Component } from 'react';
import Home from './src/app/screens/Home';
import Details from './src/app/screens/Details';
import CreateCard from  './src/app/screens/CreateCard';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  },
  CreateCard:
  {
    screen: CreateCard
  },

},
  {
    initialRouteName: "Home"
  });

const AppContainer = createAppContainer(AppNavigator);
