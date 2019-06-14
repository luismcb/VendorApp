import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.centerLayout}>
                <Text>Welcome to the HomeComponent!</Text>
            </View>
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
