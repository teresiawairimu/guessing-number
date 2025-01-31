import {View, TextInput} from 'react-native';

const UserGuessInput = (props) => {
  
  return (
    <View>
      <TextInput 
        placeholder="Enter a number"
        onChangeText={ (x) => props.numberHandler(Number(x))}
      />
    </View>
  );
};
export default UserGuessInput;