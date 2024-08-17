import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Task from './components/Task/Task';

export default function App() {
  const [tasks, setTasks] = useState(
    [{id: 1, text: "I am a task"}]
  );
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo List!</Text>
      </View>
     <ScrollView>
      {tasks.map(task => (
        <Task task={task.text} key={task.id} />
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30
  }
});