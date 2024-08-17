import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function VisualSearch() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/visual1.png')} 
                style={styles.backgroundImage}>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Search for an outfit by taking a photo or uploading an image
                    </Text>

                    <TouchableOpacity style={styles.buttonPrimary}>
                        <Text style={styles.buttonTextPrimary}>TAKE A PHOTO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSecondary}>
                        <Text style={styles.buttonTextSecondary}>UPLOAD AN IMAGE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonPrimary: {
        backgroundColor: '#f00',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 30,
        marginBottom: 20,
    },
    buttonTextPrimary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonSecondary: {
        borderWidth: 2,
        borderColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 30,
    },
    buttonTextSecondary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});