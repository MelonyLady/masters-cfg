import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MyFirstButton() { 


  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Look It's a Button!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#be84a3',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#003b49',
  },
})


