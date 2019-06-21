import React, {Component} from 'react';
import { TextInput, View, Button} from 'react-native';
import styles from '../../../Styles';


export default class Login extends Component{
    render() {
        return (
            <View>
            <TextInput style={styles.Username} placeholder='Username'></TextInput>
            <TextInput style={styles.Password}placeholder='Password'></TextInput>
            <Button style={styles.Button} onPress={() => this.props.navigation.navigate('Home')} title='Login'></Button>
            </View>
        );
    }
}

