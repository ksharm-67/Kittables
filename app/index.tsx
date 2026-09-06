import { registerRootComponent } from 'expo';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StyleSheet, Text, View } from 'react-native'
import App from './app';
import React from 'react'

const index = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the Kittables app!
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fedcdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 20,
  },
})

registerRootComponent(App);

