import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserGuessInput from './components/UserGuessInput';


const App = () => {
  const [newNumber, setNumber] = useState('');
  const [guess, setGuess] = useState(Math.floor(Math.random()*101));
  const [message, setMessage] = useState('');

  const checkGuess = () => {
    const userGuess = Number(newNumber);
    if (userGuess === guess) {
      setMessage("Congratulations!!!\nYou have guessed it right.\nPlay Again...")
      setGuess(Math.floor(Math.random()*101))
    } else if (userGuess < guess) {
      setMessage("Try Again!!!\nThe hidden number is higher than your guess.")
    } else {
      setMessage("Try Again!!!\nThe hidden number is lower than your guess.")
    }
  }
  return (
    <View style={styles.container}>
      <View style={{borderWidth: 2, borderColor: 'black', borderStyle: 'solid', padding: 60}}>
        <View style={{borderWidth: 2, borderColor: 'black', padding: 10, borderRadius: 8, marginBottom: 10}}>
          <UserGuessInput numberHandler={number => setNumber(number)}/>
        </View>
        <Button 
          title='Check My Guess'
          onPress={checkGuess}
        />
        <Text> {message} </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
