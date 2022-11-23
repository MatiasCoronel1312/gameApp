import React, { useState } from "react";
import { View, Text, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { Card, Input } from "../../components";
import colors from "../../utils/colors";

const StartGame = () => {
    const [number, setNumber] = useState('');

    const onHandleChange =  (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const onHandleReset = () => {
        setNumber('');
    }

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <Text style={styles.title}>Let's Go!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Select a number</Text>
                    <Input 
                        style={styles.input} 
                        placeholder='0'
                        maxLength={2}
                        keyboardType='number-pad'
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={onHandleChange}
                        value={number}
                    />            
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Reset"
                            onPress={onHandleReset}
                            color={colors.primary} 
                        />
                        <Button
                            title="Confirm"
                            onPress={() => null}
                            color={colors.primary} 
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;