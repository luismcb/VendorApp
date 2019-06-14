import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import {Container,Header,Title,Body,} from 'native-base';

export default class Home extends Component {
    render() {
        return (
            // <View style={styles.centerLayout}>
            //     <Text>Welcome to the HomeComponent!</Text>
            // </View>
            <Container>
                    <Header androidStatusBarColor="blue" style={{backgroundColor:'dodgerblue', height:50}} >
                        <Body>
                            <Title style={{color:"white", alignSelf:'center'}}>HOME</Title>
                        </Body>
                    </Header>
                </Container>
         
        )
    }
}

const styles = StyleSheet.create({
    
    centerLayout:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    }


})
