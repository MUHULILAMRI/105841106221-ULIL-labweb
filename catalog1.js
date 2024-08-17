import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';

const katalog1 = () => {
  const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops'];
  const [products, setProducts] = useState([
    {
      name: 'Casual T-shirt',
      image: require('./assets/brown.png'),
      color: 'Brown',
      size: 'M',
      price: 25,
      rating: 4,
      ratingCount: 12,
      loved: false,
    },
    {
      name: 'Summer Blouse',
      image: require('./assets/white.png'),
      color: 'Pink',
      size: 'L',
      price: 52,
      rating: 5,
      ratingCount: 18,
      loved: false,
    },
    {
      name: 'T-shirt',
      image: require('./assets/white.png'),
      color: 'Black',
      size: 'L',
      price: 80,
      rating: 5,
      ratingCount: 42,
      loved: false,
    },
    {
      name: 'Party Dress',
      image: require('./assets/white.png'),
      color: 'Green',
      size: 'L',
      price: 21,
      rating: 3,
      ratingCount: 28,
      loved: false,
    },
  ]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? require('./assets/star.png') : require('./assets/starno.png')}
          style={{ width: 18, height: 18 }}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={{ fontSize: 14, color: '#000', marginLeft: 4 }}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].loved = !newProducts[index].loved;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingRight: 8 }}>
          <Image source={require('./assets/arrow.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333333', flex: 1, textAlign: 'center' }}></Text>
        <TouchableOpacity style={{ paddingLeft: 8 }}>
          <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Women's Tops</Text>
      </View>

      <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16, paddingBottom: 8, zIndex: 1 }}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={{ paddingVertical: 8, paddingHorizontal: 20, backgroundColor: 'black', marginHorizontal: 8, borderRadius: 18 }} onPress={() => {/* Handle category press */}}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
        <TouchableOpacity style={{ paddingVertical: 4, paddingHorizontal: 8, borderWidth: 1, borderColor: '#000', borderRadius: 4 }} onPress={() => sortProductsByPrice(true)}>
          <Text style={{ fontSize: 14 }}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 4, paddingHorizontal: 8, borderWidth: 1, borderColor: '#000', borderRadius: 4 }} onPress={() => sortProductsByPrice(true)}>
          <Text style={{ fontSize: 14 }}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 4, paddingHorizontal: 8, borderWidth: 1, borderColor: '#000', borderRadius: 4 }} onPress={() => sortProductsByPrice(false)}>
          <Text style={{ fontSize: 14 }}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <Image source={item.image} style={{ width: 90, height: 90, marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#777' }}>Color: {item.color}</Text>
              <Text style={{ fontSize: 14, color: '#777' }}>Size: {item.size}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                {renderStars(item.rating, item.ratingCount)}
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${item.price}</Text>
            </View>
            <TouchableOpacity style={{ padding: 8 }} onPress={() => toggleLove(index)}>
              <Image source={item.loved ? require('./assets/heart.png') : require('./assets/heartno.png')} style={{ width: 28, height: 28 }} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(index) => index.toString()}
        style={{ marginTop: 8 }}
      />
    </View>
  );
};

export default katalog1;