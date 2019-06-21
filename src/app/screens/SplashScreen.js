import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import styles from '../../../Styles';

export default class SplashScreen extends Component {
    componentDidMount(){
        this.authCheck();
    }
    authCheck = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Auth')
        }, 1500);
    }
    
    render() {

        return (
            <View>
                <Text style={styles.Status}>Welcome to Card System</Text>
            </View>
        );
    }
}