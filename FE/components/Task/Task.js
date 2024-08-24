import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TaskCheck from './TaskCheck';
import ButtonTask from './ButtonTask';

function Task({ task, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckPress = () => {
        setIsChecked(!isChecked);
    };

    const handleDeleteClick = () => {   
        onDelete(task._id);
    }

    return (
        <View style={styles.taskContainer}>
            <TaskCheck isChecked={isChecked} onPress={handleCheckPress} />
            <Text style={styles.taskText}>{task.title}</Text>
            <View style={styles.buttonGroup}>
                <ButtonTask title="Edit" color="#4CAF50" />
                <ButtonTask title="Delete" onPress={handleDeleteClick} color="#f44336" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#a2d15c',
        borderColor: '#dbe7b5',
        borderWidth: 6,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 10,
        flexWrap: 'wrap',
    },
    buttonGroup: {
        flexDirection: 'row',
    },
});

export default Task;