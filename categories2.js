import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const Category2 = ({ navigation }) => {

  <Text>chose categories</Text>
  const categories = [
    'Tops', 'Shirts & Blouses', 'Cardigans & Sweaters', 'Knitwear', 'Blazers', 
    'Outerwear', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Dresses'
  ];

  return (
    <View style={{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./assets/arrow.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000000',
        }}>Categories</Text>
        <TouchableOpacity>
        <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={{
        backgroundColor: '#FF3B30', 
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
      }}>
        <Text style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
        }}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>
      <Text style={{fontSize:14}}>chose category</Text>
      
      <FlatList 
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
          }}>
            <Text style={{ fontSize: 16,color: '#000000',}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default Category2;