import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginScreen({ navigation }) {



return (
  <View style={styles.container}>
    <Text style={styles.textHeader}>Please Login below:</Text>
    <Text></Text>
    
    <Text style={styles.textSubheader}>Username: </Text>
    <Text></Text>
    <Text style={styles.textSubheader}>Password: </Text>
    <Text></Text>
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