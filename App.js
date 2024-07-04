// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SingupPage from './SingupPage';
import ForgetPasswordPage from './ForgetPasswordPage';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="kehalaman LoginPage" onPress={() => navigation.navigate('LoginPage')}/>
      <Button title="SingupPage" onPress={() => navigation.navigate('SingupPage')}/>
      <Button title="ForgetPasswordPage" onPress={() => navigation.navigate('ForgetPasswordPage')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SingupPage" component={SingupPage} />
        <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;