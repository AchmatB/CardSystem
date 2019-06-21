import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from '../../../../Styles';

export default class Cards extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const cards = this.props.tasks.map((item) => {

            return(
                <Card key={item.id}>
                    <Card.Title title={item.name}/>
                    <Card.Content>
                        <Title>{item.phoneNumber}</Title>
                        <Paragraph style={styles.Status}>{item.status}</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: item.uri }} />
                    <Card.Actions>
                        <Button onPress={() => this.props.navigation.navigate('Details', {item})} >View</Button>
                    </Card.Actions>
                    </Card>
            )
            
        })
        return (
        <View>{cards}</View>
        )
        
    }
}
