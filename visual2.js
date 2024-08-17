import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Visual1() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./assets/visual1.png')} 
            />
            <View style={styles.controlsContainer}>
                <Image
                    style={styles.flashIcon}
                    source={require('./assets/flash.jpeg')} 
                />
                <Image
                    style={styles.cameraIcon}
                    source={require('./assets/camera.jpeg')} 
                />
                <Image
                    style={styles.rotationIcon}
                    source={require('./assets/rotation.jpeg')} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: 300,
        height: 500,
        resizeMode: 'cover',
        marginBottom: 30,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    flashIcon: {
        width: 25, 
        height: 25,
        resizeMode: 'contain',
        marginRight: 25,
    },
    cameraIcon: {
        width: 50, 
        height: 50,
        resizeMode: 'contain',
        borderRadius: 50,
        marginRight: 5,
    },
    rotationIcon: {
        width: 24, 
        height: 24,
        resizeMode: 'contain',
        marginLeft: 22,
    },
});