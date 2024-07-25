import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My profile</Text>
                <TouchableOpacity style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require('./assets/ulil.jpg.jpeg')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.profileName}>MUH. ULIL AMRI</Text>
                <Text style={styles.profileEmail}>muhulila28@mail.com</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>My orders</Text>
                <Text style={styles.menuSubText}>Already have 27 orders</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>Shipping addresses</Text>
                <Text style={styles.menuSubText}>3 addresses</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>Payment methods</Text>
                <Text style={styles.menuSubText}>Visa **28</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>Promocodes</Text>
                <Text style={styles.menuSubText}>You have special promocodes</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>My reviews</Text>
                <Text style={styles.menuSubText}>Reviews for 4 items</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.menuText}>Settings</Text>
                <Text style={styles.menuSubText}>Notifications, password</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileImageContainer: {
        padding: 8,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 24,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        fontSize: 16,
        color: '#777',
        marginTop: 4,
    },
    menuItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuSubText: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
});