import IP from 'react-native-image-picker';
import React, { Component } from 'react';
import { Button, View, ScrollView, StyleSheet, Image } from 'react-native';

export default class ImagePicker extends Component {
    state = {
        uploadImage: ''
    }
    render() {
        // More info on all the options is below in the README...just some common use cases shown here


        displayImagePicker = () => {
            let options = {
                title: 'Select Avatar',
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                }
            };

            IP.showImagePicker(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    let source = { uri: response.uri };

                    // You can also display the image using data:
                    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.setState({
                        uploadImage: source
                    });
                }
            });

        }

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */


        return (
            <ScrollView>
                <View  >
                    <Button onPress={() => displayImagePicker()} title='Upload Photo'></Button>
                </View >
                <View style={styles.placeholder}>
                    <Image source={this.state.uploadImage} style={styles.previewImage} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "70%",
        height: 280,
        marginTop: 50,
        marginLeft: 60
    },
    previewImage: {
        width: "100%",
        height: "100%",
        marginLeft: 10

        
    }
});