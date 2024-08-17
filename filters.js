import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, PanResponder, Animated } from 'react-native';

const Filters = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([78, 143]);
  const [selectedColors, setSelectedColors] = useState(['#000000', '#FF0000']);
  const [selectedSizes, setSelectedSizes] = useState(['S', 'M']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState(['Adidas', 'Jack & Jones']);

  const colors = ['#000000', '#FFFFFF', '#FF0000', '#8B4513', '#D3B8AE', '#FFC107', '#1A237E'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Boys', 'Girls'];

  const minPrice = 78;
  const maxPrice = 143;
  const rangeWidth = 320; // Range bar width for the price slider

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const discardFilters = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory('All');
    setSelectedBrands([]);
  };

  const applyFilters = () => {
    console.log('Filters Applied:', {
      selectedPriceRange,
      selectedColors,
      selectedSizes,
      selectedCategory,
      selectedBrands,
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>Filters</Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Price range</Text>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={{ height: 30, width: 320, backgroundColor: '#E0E0E0', borderRadius: 5, position: 'relative', justifyContent: 'center', marginBottom: 10 }}>
          <Animated.View
            style={{
              width: 20,
              height: 30,
              borderRadius: 10,
              position: 'absolute',
              top: 0,
              left: minPriceAnimation,
              backgroundColor: '#FF3B30',
            }}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={{
              width: 20,
              height: 30,
              borderRadius: 10,
              position: 'absolute',
              top: 0,
              left: maxPriceAnimation,
              backgroundColor: '#FF3B30',
            }}
            {...panResponderMax.panHandlers}
          />
          <View style={{ position: 'absolute', height: '100%', backgroundColor: '#FF3B30', opacity: 0.3, borderRadius: 5 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ fontSize: 16, color: '#000000' }}>${minPrice}</Text>
          <Text style={{ fontSize: 16, color: '#000000' }}>${maxPrice}</Text>
        </View>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Colors</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              margin: 5,
              backgroundColor: color,
              borderWidth: 3,
              borderColor: selectedColors.includes(color) ? '#FF3B30' : '#FFFFFF',
            }}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Sizes</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              margin: 5,
              borderRadius: 20,
              backgroundColor: selectedSizes.includes(size) ? '#FF3B30' : '#FFFFFF',
              borderWidth: 1,
              borderColor: '#FF3B30',
            }}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={{ fontSize: 16, color: selectedSizes.includes(size) ? '#FFFFFF' : '#000000' }}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Category</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              margin: 5,
              borderRadius: 20,
              backgroundColor: selectedCategory === category ? '#FF3B30' : '#FFFFFF',
              borderWidth: 1,
              borderColor: '#FF3B30',
            }}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={{ fontSize: 16, color: selectedCategory === category ? '#FFFFFF' : '#000000' }}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#E0E0E0', borderRadius: 20 }} onPress={discardFilters}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#FF3B30', borderRadius: 20 }} onPress={applyFilters}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Filters;