import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Task from './components/Task/Task';
import NewTask from './components/NewTask/NewTask';

export default function App() {
  const [tasks, setTasks] = useState(
    [{id: 1, text: "I am a task"}]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo tist!</Text>
      </View>
     <ScrollView>
      {tasks.map(task => (
        <Task task={task.text} key={task.id} />
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