import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyFirstButton from '../components/myFirstButton';


class Login extends React.Component {



  componentDidMount(){
    console.log(`Login screen successfully exists: ${Date.now()}`)
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>User Login</Text>
      <Text style={styles.textSubheader}>Please enter credentials below:</Text>
      <Text></Text>
      <Text>Username:</Text>
      <Text></Text>
      <Text>Password</Text>
      <MyFirstButton details= "I will be a login in button one day"></MyFirstButton>
      <Text></Text>
        <StatusBar style="auto" />
    </View>
  )}
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
        }
  });

  export default Login;