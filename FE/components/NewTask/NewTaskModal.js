import react from 'react'
import { useState } from 'react';
import { View, Modal, TextInput } from 'react-native'

const NewTaskModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    return (
        <Modal>
            <Text>Add new task</Text>
            <TextInput
                placeholder='Task Title'
                value={newTaskTitle}
                onChangeText={setNewTaskTitle}
                ></TextInput>
        </Modal>
    );
}