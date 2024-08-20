import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function TaskButton(text) {
    return(
        <View>
            <Button title={text} />
        </View>
    )
}