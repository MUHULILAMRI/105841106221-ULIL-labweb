import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShopPage() {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Shop Page!</Text>
            {/* Add your shop page content here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});