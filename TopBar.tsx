import React from 'react';
import {StyleSheet, Text, View } from 'react-native'

export default function TopBar() {
    return (
        <View style = {styles.container}>
            <Text>Tip Calculator by Matt</Text>
        </View>
     )
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center'
    }
});