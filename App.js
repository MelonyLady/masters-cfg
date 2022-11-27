import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFirstButton from './myFirstButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>It's my app I'll do what I want to</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.textSubheader}>Time to make my first App!</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.text}>Woohoo!</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <MyFirstButton></MyFirstButton>
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
