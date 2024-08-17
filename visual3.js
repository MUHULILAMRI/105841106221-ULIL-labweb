import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Visual2() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('./assets/bgr.jpg')}
                />

                {/* Overlay yang menggelapkan area di luar kotak */}
                <View style={styles.overlayContainer}>
                    <View style={styles.darkOverlay} />
                    <View style={styles.cropContainer}>
                        <Image
                            style={styles.image}
                            source={require('./assets/bgr.jpg')}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.cameraButton}>
                <Image
                    style={styles.cameraIcon}
                    source={require('./assets/search.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    darkOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap
    },
    cropContainer: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
        borderColor: '#ffffff',
        borderWidth: 4,
        borderRadius: 20,
        overflow: 'hidden', // Pastikan hanya area dalam kotak yang terlihat
    },
    cameraButton: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -25 }],
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff3b30',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    cameraIcon: {
        width: 25,
        height: 25,
        tintColor: '#ffffff',
    },
});