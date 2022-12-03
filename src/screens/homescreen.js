import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyFirstButton from '../components/myFirstButton';

export default function HomeScreen({ navigation, route }) {

return (
  <View style={styles.container}>
    <Text style={styles.textHeader}>Generic Home Page</Text>
    <Text></Text>
    <MyFirstButton details= "I'm the best button!"></MyFirstButton>
{/*     
    <Button
    title="Go to About us"
    onPress={() =>
      navigation.navigate('AboutUs', {name: 'Woo!'})
    }
  /> */}
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
        }
  });