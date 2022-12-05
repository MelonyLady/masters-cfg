import { ListViewBase, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState, useEffect} from "react";

export default function Button2(props) { 

  const [generatedWord, setGeneratedWord] = useState(props.details)
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState({})

  useEffect(() => {
    console.log("Button2 component mounted successfully")
  },[])

  useEffect(() =>{
    console.log(`Count was updated to ${count}`)
  }, [count])

  function randomSong(){
        // var words = ["Yellow", "purple", "green","Rock", 'Paper', 'Scissor']
    var words = pokemonList
    var word = words[Math.floor(Math.random()*words.length)]
    setGeneratedWord(word)
    console.log("Random word is: " + word)
  }

  function counter() {
    var currentCount = 0
    setCount(count + 1)
    return currentCount + 1
  }

  function fetchKantoPokemon(){
   
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {
      var listNames = []
      // console.log(allpokemon)
      allpokemon.results.forEach(pokemon => {
        listNames.push(pokemon.name)
      });
      // console.log(listNames)
      setPokemonList(listNames) 
    })
  }

  useEffect(()=>{
    console.log("MyButton component mounted successfully ")
    fetchKantoPokemon()
  },[])

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


