import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";

export default function Button2(props) { 

  const [generatedWord, setGeneratedWord] = useState(props.details)
  const [count, setCount] = useState(0)


  function randomSong(){
    var words = ["Cat", "dog", "green","dragon", 'unicorn', 'beaver']
    var word = words[Math.floor(Math.random()*words.length)]
    setGeneratedWord(word)
    console.log("Random word is: " + word)
  }

  function counter() {
    var currentCount = 0
    setCount(count + 1)
    return currentCount + 1
  }

  return (
    <View>
    <Pressable style={styles.buttonStyle} onPress={randomSong}>
      <Text style={styles.textStyle}>{generatedWord}</Text>
    </Pressable>
    <Pressable style={styles.buttonStyle} onPress={counter}>
      <Text style={styles.textStyle}>{count}</Text>
    </Pressable>
    </View>
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


