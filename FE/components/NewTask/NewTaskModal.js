import React, { useState } from 'react';
import { View, Modal, TextInput, Pressable, StyleSheet, Text } from 'react-native';

function NewTaskModal({ isModalVisible, handleAddTask, onCloseModal }) {
    const [newTask, setNewTask] = useState(
        {title: "", description: ""}
    );

    const onAddTask = () => {
        handleAddTask(newTask);
        setNewTask({title: "", description: ""});
        onCloseModal();
    }

    return (
        <Modal animationType='slide' transparent={true} visible={isModalVisible}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titleText}>Add New Task</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Task Title'
                        value={newTask.title}
                        onChangeText={setNewTask}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Task Description'
                        value={newTask.description}
                        onChangeText={setNewTask}
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable style={[styles.button, styles.addButton]} onPress={onAddTask}>
                            <Text style={styles.buttonText}>Add Task</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.cancelButton]} onPress={onCloseModal}>
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

export default NewTaskModal;
