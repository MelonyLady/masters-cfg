import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
// import melonLady from '../../../assets/melonLady.png';



export default function CreateAccount({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [passwordRepeat, setPasswordRepeat] = useState('');
 


  const onRegisterPressed = () => {
    console.warn("Account Registerred");
  };

  const onPrivacyPressed = () => {
    console.warn("some form of info");
  };

const onHaveAccount= () => {
    console.warn("go to login!!")
    navigation.navigate('Login');
  };

return (
  <View style={styles.container}>
    <Text style={styles.textHeader}> CreateAccount </Text>

    <View style={styles.inputView}> 
    <TextInput
    style={styles.textInput}
    placeholder="Username" // MelonLady
    placeholderTextColor="#003f5c"
    onChangeText={(username) => setUsername(username)}
  />
    </View>
    <View style={styles.inputView}>
    <TextInput
      style={styles.textInput}
      placeholder="Password" // 1234
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    />
    <TextInput
    style={styles.textInput}
    placeholder="Repeat Password" // 1234
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
  />
      </View>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}
      onPress={onRegisterPressed}>Register</Text>
      </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.signup_button}
      onPress={onPrivacyPressed}>By registering you agree to terms of user and privacy policy :P </Text>
      </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.signup_button}
      onPress={onHaveAccount}>Have an account sign in!</Text>
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
      marginBottom: 10

      
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
      marginBottom: 5,
    }
  });