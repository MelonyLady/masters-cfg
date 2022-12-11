import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successCriteria, setSuccesCriteria] = useState('');
 
  
  const credentialCheck = () => {
    setSuccesCriteria('');
    if (!username) {
      alert('please enter username');
      return;
    }
    if (!password) {
      alert('please enter paswword')
    };
  }



return (
  <View style={styles.container}>
    {/* <Image source={require("../assets/MelonLady.png")} /> */}

    <View style={styles.inputView}> 
    <TextInput
    style={styles.textInput}
    placeholder="Username"
    placeholderTextColor="#003f5c"
    onChangeText={(username) => setUsername(username)}
  />
    </View>
    <View style={styles.inputView}>
    <TextInput
      style={styles.textInput}
      placeholder="Password."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    />
      </View>
    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}
      onPRess={credentialCheck}>LOGIN</Text>
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