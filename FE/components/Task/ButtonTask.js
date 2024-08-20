import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function ButtonTask({ title }) {
    function handlePress() {
        console.log(`${title} button pressed`);
    }

    return (
        <View style={styles.buttonContainer}>
            <Button 
                title={title} 
                onPress={handlePress} 
                color="#fff" 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 10,
    },
});

export default ButtonTask;