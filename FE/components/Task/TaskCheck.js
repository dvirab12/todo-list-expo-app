import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

function TaskCheck({ isChecked, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.circle}>
                {isChecked && <View style={styles.innerCircle} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: '#000', // Border color
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 35, // Adjust size as needed
        height: 35, // Adjust size as needed
        borderRadius: 15, // Match half of the width/height
        backgroundColor: '#FFFFFF', // Color of the inner circle
    },
});

export default TaskCheck;