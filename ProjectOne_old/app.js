import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserGuessInput from './components/UserGuessInput';

 

//export default function HomeScreen() {

export default function App() {
  return (
    <View style={styles.container}>
      <UserGuessInput />
      <Button
        title="Check My Guess"
      />
      <StatusBar style="auto"/>
    </View>
  );
}



 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});