import { registerRootComponent } from 'expo';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StyleSheet, Text, View } from 'react-native'
import { Button, withTheme } from '@rneui/themed';
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
      <Button
        style={{
          position: 
        }}
        title="Log On"
        titleStyle={styles.titStyle}
        buttonStyle={styles.butStyle}
        containerStyle={{
          width: 90,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Text style={styles.text}>
        Welcome to the Kittables app!
      </Text>

      <Button
        title="Browse Cats"
        titleStyle={styles.titStyle}
        buttonStyle={styles.butStyle}
        containerStyle={styles.contStyle}
      />
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
  titStyle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: 'black',
  },
  butStyle: {
    backgroundColor: '#b6e6ff',
    borderRadius: 15,
  },
  contStyle: {
    width: 150,
    marginHorizontal: 50,
    marginVertical: 10,
  },
})

registerRootComponent(index);

