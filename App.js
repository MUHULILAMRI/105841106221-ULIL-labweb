import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        // fontWeight: 'bold',
        fontFamily: 'MetroMedium',
      }}>
        {text}
      </Text>
    </View>
  )
}

const TextInputCustom = ({ placeholder, typekeyboard }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={typekeyboard}
      style={{
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: 'MetroMedium',
      }}
    />
  )
}

const App = () => {
  const[dapatFont]=useFonts({
    'MetroBold':require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium':require('./assets/fonts/Metropolis-Medium.otf'),
});
if(!dapatFont){
  return <Text>Font tidak ditemukan...</Text>
}
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={{
          fontSize: 16,
          fontFamily: 'MetroMedium',
        }}>Please,enter your email addres.You will receive a link to create a new password via email</Text>
        <View style={styles.form}>
          {/* <TextInputCustom placeholder="Email" typekeyboard="email-address" /> */}
          <TextInputCustom placeholder="Email" typekeyboard="email-address" />
          {/* <TextInputCustom placeholder="Password" typekeyboard="default" /> */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Text style={{ fontSize: 11, textAlign:'center',fontFamily:'MetroMedium',color:'red' }}>Not a valid email address.Should be your@email.com</Text>
          </View>
          <ButtonCustom text="SEND" color="red" />
        </View>
      </View>
      {/* <Text style={{
         textAlign: 'center', 
         fontFamily: 'MetroMedium', 
         marginTop: 20 }}>Back to login</Text> */}
      </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 32,
    // fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'MetroBold',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    alignItems: 'center',
    // fontFamily: 'MetroMedium',
  }
  });