import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TaskCheck from './TaskCheck'

function Task({task}){
    return (
        <View style={styles.taskContainer}>
            <TaskCheck isChecked={true} />
            <Text style={[styles.taskText, styles.taskTitleText]}>{task}</Text>
        </View>
    );
}
  

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#a2d15c',
    borderColor: '#dbe7b5',
    borderWidth: 6,
    marginHorizontal: 10
  },
  taskText: {
    fontSize: 18,
    marginLeft: 20
  },
  taskTitleText: {
    fontWeight: 'bold'
  }
});

export default Task;