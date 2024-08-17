import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Task({task}){
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{task}</Text>
        </View>
    );
}
  

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f2f9dc',
    borderColor: '#dbe7b5',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 18,
  }
});

export default Task;