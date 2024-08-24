import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function ButtonTask({ title, color = '#000000' }) {
    const handlePress = () => {
        console.log(`${title} button pressed`);
    };

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={handlePress}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});

export default ButtonTask;