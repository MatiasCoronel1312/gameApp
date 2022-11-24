
import { useState } from 'react';
import { ActivityIndicator, StyleSheet,  View } from 'react-native';
import { Header } from './components'
import { StartGame, Game } from './screens';
import { useFonts } from 'expo-font';
import colors from "./utils/colors";

export default function App() {
  const [loaded] = useFonts ({
    'StencilR': require('../assets/fonts/StardosStencil-Regular.ttf'),
    'StencilB': require('../assets/fonts/StardosStencil-Bold.ttf'),
  })

  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectNumber) => {
    setUserNumber(selectNumber);
  }

  let content = <StartGame onStartGame={onStartGame}/>
  if(userNumber) {
    content = <Game selectNumber={userNumber}/>
  }else{<StartGame onStartGame={onStartGame}/>}

  if(!loaded){
    return  (
      <View style={styles.containerLoaded}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
      )
  }

  return (
    <View style={styles.container}>
      <Header title={userNumber? "Let's Play":'Welcome to Game'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  containerLoaded:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
