import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import melonLady from '../../../assets/melonLady.png';



export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, settoken] = useState(null);
 
  

  const onLoginPressed = async() => {
    await AsyncStorage.setItem('token', username)
    if (username === 'MelonLady' && password === '1234'){
    console.warn("Log in")
    navigation.navigate('Home');
    } else {
      console.warn('Please try again')
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot password");
  };

  const onSignupPressed = () => {
    console.warn("go to signup!!")
    navigation.navigate('Sign Up');
  };


  const tokenLogin = async() => {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      navigation.navigate('Home')
      console.log('You are logged in')
    }else {
      console.warn('You have not been successful, please try again')
    }
  };

tokenLogin()

return (
  <View style={styles.container}>
    {/* <Image source={require('...\assets\melonLady.png')} /> */}

    <View style={styles.inputView}> 
    <TextInput
    style={styles.textInput}
    placeholder="Username" // MelonLady
    placeholderTextColor="#003f5c"
    onChangeText={(value) => setUsername(value)}
  />
    </View>
    <View style={styles.inputView}>
    <TextInput
      style={styles.textInput}
      placeholder="Password" // 1234
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(value) => setPassword(value)}
    />
      </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}
      onPress={onForgotPasswordPressed}>Forgot Password?</Text>
      </TouchableOpacity>

      
    <TouchableOpacity>
      <Text style={styles.signup_button}
      onPress={onSignupPressed}>No account? Sign up here!</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}
      onPress={onLoginPressed}>LOGIN</Text>
      </TouchableOpacity>

    <StatusBar style="auto" />
  </View>
  
   
);
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003b49',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeader: {
      color: '#be84a3',
      fontWeight: 'bold',
      fontSize: 26,
      textDecorationLine: 'underline',
      lineHeight: 30
      
      },
    textSubheader: {
      color: '#be84a3',
      fontStyle: 'italic',
      fontSize: 22,
      lineHeight: 33
        },
    text: {
      color: '#be84a3',
      fontStyle: 'normal',
      fontSize: 19,
        },
    image :{
      marginBottom: 40
    
    },
    inputView: {
      backgroundColor: "#A991C8",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 5,
      color: "#be84a3"
    },
    signup_button: {
      height: 30,
      marginBottom: 30,
      color: "#be84a3"
    },
    loginBtn:{
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#be84a3",
    }
  });