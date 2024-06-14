import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const App = () => {
  return (
    <View style={{
      flex: 1, 
    }}>
      <View style={{
        width: 100, 
        height: 100,
        backgroundColor: 'red'
      }}>
      </View>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue'
          }}>
          </View>
        </View>

      </View>
    
  )
  
}
   
export default App