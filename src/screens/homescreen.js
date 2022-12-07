import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {

  const user = useSelector((state) => state.username)

  const dispatch = useDispatch()

  function addUser(user){
    const action = {
      type: "ADD_USER",
      payload: user
    }
    dispatch(action)
  }

  function removeUser(none){
    const action = {
      type: "REMOVE_USER",
      payload: none
    }
    dispatch(action)
  }

return (
  <View style={styles.container}>
    <Text style={styles.textHeader}>Generic Home Page</Text>
    <Text></Text>
    
    <Text style={styles.textSubheader}>User: {user}</Text>
    <Button title={"Add user"} onPress={() => addUser("MelonyLady")}></Button>
    <Button title={'Remove user'} onPress={() => removeUser()}></Button>
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