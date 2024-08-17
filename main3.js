import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const main = () => {
  return (
    <View style={{
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      }}>
        <Image
          source={require('./assets/searchred.png')}
          style={{
            width: 45,
            height: 45,
            marginBottom: 30,
            tintColor: 'red',
          }}
        />
        <text style={{
          fontSize: 34,
          color: '#000000',
          fontWeight: 'bold',
          fontFamily: 'Metropolis',
        }}>Finding similar result...
        </text>      
    </View>
  )
}

export default main

const styles = StyleSheet.create({})