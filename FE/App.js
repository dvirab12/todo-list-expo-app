import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Task from './components/Task/Task';
import NewTaskButton from './components/NewTask/NewTaskButton';
import { addNewTask, deleteTaskById, getAllTasks, updateTaskById } from './services/tasksService';
import TaskModal from './components/NewTask/TaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    if (tasks.length === 0) {
      loadTasks();
    }
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const fetchedTasks = await getAllTasks();
      console.log(fetchedTasks);
      setTasks(fetchedTasks);
    } catch (err) {
      console.error("Failed to fetch tasks!", err);
    }
  }

  const taskModalOpen = () => {
    setIsModalVisible(true);
    console.log('opened new task modal');
  }

  const taskModalClose = () => {
    setIsEditing(false);
    setTaskToEdit(null);
    setIsModalVisible(false);
    console.log('closed new task modal');
  }

  const handleTaskDelete = async (taskId) => {
    try {
      await deleteTaskById(taskId);
      setTasks(tasks => tasks.filter(task => task._id !== taskId));
    } catch (err) {
      console.error(`Failed to delete task ${taskId}`, err);
    }
  }

  const handleAddTask = async (task) => {
    try {
      if (isEditing) {
        const updatedTask = await updateTaskById(task._id, task);
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === task._id ? updatedTask : t)));
      } else {
        const newTask = await addNewTask(task);
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    } catch (err) {
      console.error(`Failed to save task ${task}`, err);
    }
    taskModalClose(); // Ensure modal closes after saving task
    loadTasks();
  }

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setIsEditing(true);
    taskModalOpen();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo List!</Text>
      </View>
      <ScrollView>
        {tasks.map(task => (
          <Task task={task} key={task._id} onDelete={handleTaskDelete} onEdit={() => handleEditClick(task)} />
        ))}
      </ScrollView>
      <NewTaskButton onPress={taskModalOpen} />
      <TaskModal 
        isModalVisible={isModalVisible}
        handleAddTask={handleAddTask}
        onCloseModal={taskModalClose}
        isEditing={isEditing}
        taskToEdit={taskToEdit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }
});
