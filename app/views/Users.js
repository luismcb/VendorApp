import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Users extends Component {
    render() {
        return (
            <View style={styles.centerLayout}>
                <Text> Welcome to the UsersComponent! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    centerLayout:{
        display:'flex',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }

})
