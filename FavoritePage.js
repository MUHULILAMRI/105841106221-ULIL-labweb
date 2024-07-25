import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorite Page</Text>
            {/* Tambahkan komponen favorit di sini */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});