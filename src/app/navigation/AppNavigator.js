import React, { Component } from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';
import CreateCard from  '../screens/CreateCard';
import Login from '../screens/Login';
import Splash from '../screens/SplashScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';


const AuthNavigator = createStackNavigator({
    Login: {
        screen: Login
    }
    
})

const MainNavigator = createStackNavigator({

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

const AppNavigator = createSwitchNavigator({
    Splash: {
        screen: Splash
    },
    Auth:AuthNavigator,
    Main: MainNavigator,
},{
    initialRouteName: "Splash"
})


const AppContainer = createAppContainer(AppNavigator);

    export default class Navigation extends Component{
        state = {}
        render()
        {
            return( <AppContainer/> )
        }
    }