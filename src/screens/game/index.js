import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import colors from "../../utils/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, excluide) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max-min) + min );
    if(randomNumber=== excluide){
        return generateRandomNumber(min, max, excluide);
    }else{
        return randomNumber;
    }
}

const Game = ({selectNumber, onHandleReturn}) => {
    const [currentGuess, setCurrentGuess] = useState (generateRandomNumber(1, 100, selectNumber));
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Opponent's Number</Text>
                <NumberContainer number={currentGuess}/>
                <View style={styles.containerButton}>
                    <Button 
                        title="lower" 
                        onPress={() => null}
                        color= {colors.background}
                    />
                    <Button 
                        title="greater" 
                        onPress={() => null}
                        color={colors.primary}
                    />
                </View>
            </Card>
            <View style={styles.return}>
                <Button 
                        title="Return" 
                        onPress={() => onHandleReturn(selectNumber)}
                        color={colors.primary}
                    />
            </View>
        </View>
    )
}

export default Game;