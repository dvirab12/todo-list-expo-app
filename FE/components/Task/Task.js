import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TaskCheck from './TaskCheck';
import ButtonTask from './ButtonTask';

function Task({ task, onDelete, onEdit, onToggleCheck }) {
    const [isChecked, setIsChecked] = useState(task.isCompleted);

    const handleCheckPress = () => {
        onToggleCheck(task);
        setIsChecked(!isChecked);
    };

    const handleDeleteClick = () => {
        onDelete(task._id);
    };

    const handleEditClick = () => {
        onEdit(task)
    };

    return (
        <View style={styles.taskContainer}>
            <TaskCheck isChecked={isChecked} onPress={handleCheckPress} />
            <View style={styles.textContainer}>
                <Text style={[styles.taskText, isChecked && styles.checkedTaskText]}>
                    {task.title}
                </Text>
                {task.description ? (
                    <Text style={styles.taskDescription}>
                        {task.description}
                    </Text>
                ) : null}
            </View>
            <View style={styles.buttonGroup}>
                <ButtonTask title="Edit" onPress={handleEditClick} color="#4CAF50" />
                <ButtonTask title="Delete" onPress={handleDeleteClick} color="#f44336" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginVertical: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    taskText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    checkedTaskText: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    taskDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    buttonGroup: {
        flexDirection: 'row',
    },
});

export default Task;
