import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyFirstButton from '../components/myFirstButton';



// export default function AboutUsScreen({navigation, route}) {

//     return (
//       <View style={styles.container}>
//         <Text style={styles.textHeader}>About Us!</Text>
//         <Text style={styles.textSubheader}>Here we write some bull</Text>
//         <Text></Text>
//         <Text></Text>
//         <MyFirstButton details= "Im another button"></MyFirstButton>
//         <Text></Text>
//         <Button title= "About Us" color = "#003b49">
//         <Text></Text>
//         </Button>
//         <Text>Welcome {route.params.name}</Text>
//         <Button
//         title= "go to Home Screen"
//         onPress={() =>
//           navigation.navigate('Home')
//         }
//         />


//         <StatusBar style="auto" />
//       </View>
//     );
//   }

class AboutUsScreen extends React.Component {

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
    console.log(`the about us screen successfully exists: ${Date.now()}`)
  }
  

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>About Us!</Text>
      <Text style={styles.textSubheader}>Here we write some bull</Text>
      <Text></Text>
      <Text></Text>
      <MyFirstButton details= "Im another button"></MyFirstButton>
      <Text></Text>
      <Button title= "About Us" color = "#003b49">
      <Text></Text>
      </Button>
      {/* <Button
      title= "go to Home Screen"
      onPress={() =>
        this.props.navigation.navigate('Home')
      }
      /> */}
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

  export default AboutUsScreen;