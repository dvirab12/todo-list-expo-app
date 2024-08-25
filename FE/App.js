import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Task from './components/Task/Task';
import NewTaskButton from './components/NewTask/NewTaskButton';
import { deleteTaskById, getAllTasks, getTasks } from './services/tasksService';
import NewTaskModal from './components/NewTask/NewTaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalVisibile, setIsModalVisibile] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await getAllTasks();
        console.log(fetchedTasks)
        setTasks(fetchedTasks);
      } catch (err) {
        console.error("Failed to fetch tasks!", err)
      }
    }
    loadTasks();
  }, [])

  const newTaskModalOpen = () => {
    setIsModalVisibile(true);
    console.log('opened new task modal')
  }

  const onNewTaskModalOClose = () => {
    setIsModalVisibile(false);
    console.log('closed new task modal')
  }
  
  const handleTaskDelete = async(taskId) => {
    try {
      await deleteTaskById(taskId);
      setTasks(tasks => tasks.filter(task => task._id !== taskId));
    } catch (err) {
      console.error(`Failed to delete task ${taskId}`, err)
    }
  } 

  const handleTaskAdd = async(task) => {
    try {
      const newTask = await getTasks(task);
      setTasks([...tasks, newTask]);
    } catch (err) {
      console.error(`Failed to add task ${task}`, err)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo tist!</Text>
      </View>
     <ScrollView>
      {tasks.map(task => (
        <Task task={task} key={task._id} onDelete={handleTaskDelete} />
      ))} 
      </ScrollView>
      <NewTaskButton onPress={newTaskModalOpen} />
      <NewTaskModal 
        isModalVisible={isModalVisibile}
         handleAddTask={handleTaskAdd} 
         onCloseModal={onNewTaskModalOClose} />
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