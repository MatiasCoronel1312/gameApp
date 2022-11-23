
import { StyleSheet,  View } from 'react-native';
import { Header } from './components'
import { StartGame } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'Welcome to Game'}/>
      <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
});
