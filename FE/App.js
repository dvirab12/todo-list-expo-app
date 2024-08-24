import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Task from './components/Task/Task';
import NewTask from './components/NewTask/NewTask';
import { deleteTaskById, getAllTasks, getTasks } from './services/tasksService';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        console.log(fetchedTasks)
        setTasks(fetchedTasks);
      } catch (err) {
        console.error("Failed to fetch tasks!", err)
      }
    }
    loadTasks();
  }, [])
  
  const handleTaskDelete = async(taskId) => {
    try {
      await deleteTaskById(taskId);
      setTasks(task => task._id !== taskId);
    } catch (err) {
      console.error(`Failed to delete task ${taskId}`, err)
    }
  } 
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo tist!</Text>
      </View>
     <ScrollView>
      {tasks.map(task => (
        <Task task={task.text} key={task.id} onDelete={handleTaskDelete} />
      ))} 
      </ScrollView>
      <NewTask />
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