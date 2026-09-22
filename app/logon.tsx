import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { Button, withTheme } from '@rneui/themed'
import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

const logon = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    
    return (
        <View style={styles.container}>
            <Button
                onPress={() => router.push('/')}        
                title="Back"
                titleStyle={styles.titStyle}
                buttonStyle={styles.butStyle}
                containerStyle={{
                position: 'absolute',
                top: 40,
                left: -20,
                width: 90,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
            />
            <Text style={styles.text}>Logon</Text>
            <TextInput
                style={styles.boxStyle}
                value={username}
                onChangeText={setUsername}
                placeholder='Username'
                placeholderTextColor='#00bcfc'
            />
            <TextInput
                style={styles.boxStyle}
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
                placeholderTextColor='#00bcfc'
                secureTextEntry
            />
            <Button
                onPress={() => router.push('/')}        
                title="Sign In"
                titleStyle={styles.titStyle}
                buttonStyle={styles.butStyle}
                containerStyle={{
                position: 'absolute',
                bottom: 300,
                right: 30,
                width: 90,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
            />
            <Link href='/' style={styles.linkStyle}>Forgot Password </Link>
        </View>
    )
}

export default logon 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fedcdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 24,
    marginBottom: 15,
  },
  titStyle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: 'black',
  },
  linkStyle: {
    marginTop: 0,
    transform: [{ translateY: 35 }],
    marginLeft: 85,
    alignSelf: 'flex-start',
    color: 'blue',
  },
  boxStyle: {
    width: 250,
    height: 40,
    borderWidth: 2.5,
    borderRadius: 15,
    borderColor: '#b6e6ff',
    marginBottom: 15,
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