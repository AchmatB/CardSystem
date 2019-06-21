import React, { Component } from 'react';
import { ScrollView, Button, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


export default class CreateCard extends Component {
    state = {
        name: '',
        phoneNumber: '',
        status: '',
        uri: ''
    };

    CreateCard = () => {
        alert(this.state.name)
        alert(this.state.phoneNumber)
        alert(this.state.status)
        alert(this.state.uri)
    }
    render() {

        return (
            <ScrollView>
                <TextInput label='Card name' value={this.state.name} onChangeText={(name) => this.setState({ name })} ></TextInput>
                <TextInput label='Phone Number' value={this.state.phoneNumber} onChangeText={(phoneNumber) => this.setState({ phoneNumber })} ></TextInput>
                <TextInput label='Status' value={this.state.status} onChangeText={(status) => this.setState({ status })} ></TextInput>
                <TextInput label='URI' value={this.state.uri} onChangeText={(uri) => this.setState({ uri })} ></TextInput>
                <Button title='Submit' onPress={() => this.CreateCard()}></Button>
            </ScrollView>


        );
    }
}
