import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const SortByComponent = () => {
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Price: lowest to high');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 4,
          backgroundColor: 'white',
        }}
        onPress={() => setSortVisible(true)}
      >
        <Text style={{ fontSize: 14 }}>{selectedSort}</Text>
      </TouchableOpacity>

      <Modal
        visible={sortVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSortVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 , textAlign:'center'}}>Sort by</Text>
            <TouchableOpacity onPress={() => setSelectedSort('Popular')} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Newest')} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Customer review')} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Customer review</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Price: lowest to high')} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Price: lowest to high</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Price: highest to low')} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Price: highest to low</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortVisible(false)} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, color: 'red' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SortByComponent;