import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function NewTask(){
    return(
        <View>
            <TouchableOpacity style={[styles.Button, styles.BoxShadow]}>
                <Text style={[styles.ButtonText, styles.BoxShadow]}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#1E90FF',
        borderRadius: 50,   
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BoxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 10,
        elevation: 20, // for andorid
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FFF'
    }
})

export default NewTask;