import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.inputView}> 
            <Controller
            control={control}
            name={name}
            render={({field: {value, onChange, onBlur}}) =>(
                <TextInput
                    value={value}
                    onChnageText={onChange}
                    placeholder={placeholder}
                    style={styles.textInput}
                    secureTextEntry={secureTextEntry}
                    />
            )}>
         </View>
    );
};





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
        },
    image :{
      marginBottom: 40
    
    },
    inputView: {
      backgroundColor: "#A991C8",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: "#be84a3"
    },
    loginBtn:{
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#be84a3",
    }
  });