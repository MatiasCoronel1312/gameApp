import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";

const StartGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's Go!</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Select a number</Text>
                <TextInput style={styles.input} placeholder='0'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Reset"
                    onPress={() => null}
                    color='#58FA82' 
                />
                <Button
                    title="Confirm"
                    onPress={() => null}
                    color='#58FA82' 
                />
            </View>
        </View>
    )
}

export default StartGame;