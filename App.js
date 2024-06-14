import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const App = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row'
      
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: 70,
      }}>
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: 'red',
          borderRadius:10,
          justifyContent: 'center'
        }}>
          <Text style={{
            fontsize:20,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>LOGIN</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 70,
      }}>
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: 'blue',
          borderRadius: 10,
          justifyContent: 'center'
        }}>
          <Text style={{
            fontzise: 20,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>SingUp</Text>
        </View>
      </View>
    </View>
  )
}
   
export default App