// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingupPage from './SingupPage';
import LoginPage from './LoginPage';
import ForgetPasswordPage from './ForgetPasswordPage';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button title="kehalaman LoginPage" onPress={() => navigation.navigate('LoginPage')}/> */}
      <Button title="SingupPage" onPress={() => navigation.navigate('Sing Up')}/>
      {/* <Button title="ForgetPasswordPage" onPress={() => navigation.navigate('ForgetPasswordPage')}/> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Sing Up" component={SingupPage}options={{headerShown : false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage}options={{headerShown : false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;