import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Button2 from '../components/Button2';


class ThirdScreen extends React.Component {

  constructor(){
    super()
    this.state = {value:0}
  }

  update = () => {
    this.setState({value: this.state.value + 1})
  }

  componentDidUpdate(){
    console.log(`the new value is: ${this.state.value}`)
  } 
 
  componentDidMount(){
    console.log(`the third screen successfully exists: ${Date.now()}`)
  }
  

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>I am Screen 3</Text>
      <Text style={styles.textSubheader}>Someday I will do something</Text>
      <Text></Text>
      <Text></Text>
      <Button2 details= "I can be whatever you want"></Button2>
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

  export default ThirdScreen;