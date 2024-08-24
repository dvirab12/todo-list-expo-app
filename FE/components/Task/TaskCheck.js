import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

function TaskCheck({ isChecked, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.circleContainer}>
            <View style={styles.circle}>
                {isChecked && <View style={styles.innerCircle} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        marginRight: 15, // Spacing between the checkbox and the task text
    },
    circle: {
        width: 30, // Outer circle width
        height: 30, // Outer circle height
        borderRadius: 15, // Half of width and height to make it a circle
        borderWidth: 2, // Border width of the outer circle
        borderColor: '#000', // Border color
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 20, // Inner circle width
        height: 20, // Inner circle height
        borderRadius: 10, // Half of width and height to make it a circle
        backgroundColor: '#4CAF50', // Color of the inner circle when checked
    },
});

export default TaskCheck;
