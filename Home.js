import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        const mainImage = require('./assets/ireng.png');
        const newImages = [
            { source: require('./assets/bule.png'), title: 'cakar flag', subtitle: '10$' },
            { source: require('./assets/buleputih.png'), title: 'bekas rasa baru', subtitle: '12$' },
            { source: require('./assets/bule.png'), title: 'cakar flag', subtitle: '10$' },
            { source: require('./assets/buleputih.png'), title: 'bekas rasa baru', subtitle: '12$' },
            
        ];

        return (
            <SafeAreaView style={{
                flex: 1,ckgroundColor: '#ffffff',
            }}>
                <ScrollView>
                    <View style={{position: 'relative',}}>
                        <Image source={mainImage} style={{width: '100%',height: 400,resizeMode: 'cover',}} />
                        <View style={{
                            position: 'absolute',
                            buttom: 40,
                            left: 20,
                            right: 20,
                            alignItems: 'flex-start',
                            marginTop: 270,
                    
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 40,
                                fontWeight: 'bold',
                            }}>Walpaper</Text>
                            <TouchableOpacity style={{
                                backgroundColor: 'red',
                                paddingVertical: 10,
                                paddingHorizontal: 40,
                                marginTop: 10,
                                borderRadius: 25,
                        
                            }}
                            onPress={()=> this.props.navigation.navigate('Shop')}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontSize: 16,
                                }}>Check</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>New</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {newImages.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;