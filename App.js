import React from 'eact';
import { View, Text } from 'eact-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'ed',
    width: 250,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

const ButtonCustom = ({ text, color }) => {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonCustom text="Login" color="red" />
      <ButtonCustom text="Register" color="blue" />
      <ButtonCustom text="Register" color="green" />
    </View>
  );
};

export default App;