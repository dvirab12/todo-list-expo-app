import React, { useState, useEffect } from 'react';
import { View, Modal, TextInput, Pressable, StyleSheet, Text } from 'react-native';

function TaskModal({ isModalVisible, handleAddTask, onCloseModal, isEditing, taskToEdit }) {
    const [task, setTask] = useState({ title: "", description: "" });

    useEffect(() => {
        if (isEditing && taskToEdit) {
            setTask(taskToEdit);
        } else {
            // Reset task when not editing
            setTask({ title: "", description: "" });
        }
    }, [isEditing, taskToEdit, isModalVisible]); // Added `isModalVisible` as a dependency

    const onAddTask = () => {
        handleAddTask(task);
    };

    const onClose = () => {
        onCloseModal();
    };

    return (
        <Modal animationType='slide' transparent={true} visible={isModalVisible} onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titleText}>{isEditing ? 'Edit Task' : 'Add New Task'}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Task Title'
                        value={task.title}
                        onChangeText={(text) => setTask({ ...task, title: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Task Description'
                        value={task.description}
                        onChangeText={(text) => setTask({ ...task, description: text })}
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable style={[styles.button, styles.addButton]} onPress={onAddTask}>
                            <Text style={styles.buttonText}>{isEditing ? 'Save Changes' : 'Add Task'}</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.cancelButton]} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 10,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    addButton: {
        backgroundColor: '#1E90FF',
    },
    cancelButton: {
        backgroundColor: '#FF6347',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default TaskModal;