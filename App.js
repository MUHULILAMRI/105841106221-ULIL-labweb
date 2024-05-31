import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const App = () => {
  return (
    <View style = {{
      flex:1,
    }}>
    <View style={{
      flex: 1,
      flexDirection: 'row',
     }}>
      <View style={{
        flex: 1,
        backgroundColor: 'blue',
      }}>
    </View>
    <View style={{
        flex: 1,
        backgroundColor: 'orange',
      }}>
    </View>
    </View>
    <View style={{
        flex: 1,
        backgroundColor: 'yellow',
      }}>
    </View>
    </View>

    
  )
}

export default App