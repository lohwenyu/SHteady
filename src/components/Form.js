import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import OverallNav from '../OverallNav';



export default class Form extends Component { 

    render() {
        return(
            <View style={styles.formCon}>
                <View style={styles.inputBox}>
                    <TextInput style={styles.inputBoxText} 
                        placeholder='Matric Number'
                        placeholderTextColor='#000000'/>
                </View>
                <View style={styles.inputBox}>
                    <TextInput style={styles.inputBoxText} 
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='#000000'/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formCon : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputBox : {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: 300,
        height: 40,
        borderRadius: 25,
        marginVertical: 5,
    },
    inputBoxText : {
        flex: 1,
        paddingHorizontal: 16,
        fontSize: 20,
        color: '#000000',
    },
    button : {
        width: 300,
        height: 40,
        backgroundColor: '#fb8c00',
        borderRadius: 25,
        marginVertical: 10,
        justifyContent: 'center',
    },
    buttonText : {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
    },
});