import { useState } from 'react';
import { View, Modal, TextInput, Pressable } from 'react-native'

const NewTaskModal = ( isModalVisible, handleAddTask, onCloseModal) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onAddTask = () => {
        handleAddTask(newTaskTitle);
        setNewTaskTitle('');
    }

    return (
        <Modal
            animationType='slide'
            visible={isModalVisible}>
            <View style={styles.centeredView}>
                <Text style={styles.TitleContainer}>Add new task</Text>
                <TextInput
                    placeholder='Task Title'
                    value={newTaskTitle}
                    onChangeText={setNewTaskTitle}
                ></TextInput>
                <View style={styles.buttonContainer}>
                    <Pressable
                        title={'Add Task'}
                        style={styles.button}
                        onPress={onAddTask}
                    >
                        <Text style={styles.buttonText}>Add Task</Text>
                    </Pressable>
                    <Pressable
                        title={'Cancel'}
                        style={styles.button}
                        onPress={onCloseModal}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    TitleContainer: {
        justifyContent: "center", 
        alignItems: "center",
        fontWeight: 'bold',
        fontSize: 30,

    }
})

export default NewTaskModal;
