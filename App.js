import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
export default function App() {
  const [fontsLoaded] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),

  });
  if (!fontsLoaded) {
    return <Text>Font Tidak Ditemukan</Text>
}
return (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{
       fontFamily: 'MetroBlack'
       }}>Font Metropolis Black</Text>
       <Text style={{
        fontFamily: 'MetroBold'
        }}>Font Metropolis Bold</Text>
        <Text style={{
        fontFamily: 'MetroLight'
        }}>Font Metropolis Light</Text>
        <Text style={{
        fontFamily: 'MetroSemiBold'
        }}>Font Metropolis Medium</Text>
  </View>
);
}