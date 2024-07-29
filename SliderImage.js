import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const App = () => {
  const images = [
    require('./assets/images/casual-dress.png'),
    require('./assets/images/evening-dress.png'),
    require('./assets/images/fashionsale1.png'),
    require('./assets/images/phooto3.png'),
    require('./assets/images/photo1.png'),
    require('./assets/images/photo2.png'),
    require('./assets/images/sport-dress.png'),
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sliderContainer}>
        <ImageSlider images={images} autoPlayWithInterval={3000} loop />
      </View>
      <View style={styles.saleBanner}>
        <Text style={styles.saleText}>Fashion sale</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newTitle}>New</Text>
        <Text style={styles.newSubtitle}>You've never seen it before!</Text>
        <ImageSlider
          images={images}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={item} style={styles.newItemImage} />
              <Text style={styles.newItemText}>New Item {index + 1}</Text>
            </View>
          )}
          style={styles.newItemsSlider}
          autoPlayWithInterval={3000}
          loop
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    height: 300,
  },
  saleBanner: {
    alignItems: 'center',
    marginTop: -50,
  },
  saleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  checkButton: {
    marginTop: 10,
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  newSection: {
    padding: 20,
  },
  newTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newSubtitle: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  newItemsSlider: {
    height: 200,
  },
  customSlide: {
    alignItems: 'center',
    width: 150,
    marginRight: 10,
  },
  newItemImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  newItemText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
