import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, CheckBox, Image, TouchableOpacity, Area,Pressable, Alert } from 'react-native';

export default function App() {
  const [textPassword, setTextPassword] = useState('');
  const [textPWLenght, setTextPWLenght] = useState('');
  const [isSelectedLower, setIsSelectedLower] = useState('');
  const [isSelectedUpcase, setIsSelectedUpcase] = useState('');
  const [isSelectedNumber, setIsSelectedNumber] = useState('');
  const [isSelectedSymbol, setIsSelectedSymbol] = useState('');

  const handleLower=() => {
    setIsSelectedLower(true);
  }
  const handleUpcase=() => {
    setIsSelectedUpcase(true);
  }
  const handlePassword=() => {
    
    if(textPWLenght==''){
      alert("Vui lòng nhập chiều dài mật khẩu");
    }
    else if(isNaN(textPWLenght)){
      alert("Vui lòng nhập chiều dài mật khẩu là số");
    }
    else if(!isSelectedLower&&!isSelectedUpcase &&!isSelectedNumber&&!isSelectedSymbol){
      alert("Vui lòng chọn kí tự chứa trong mật khẩu mà bạn mong muốn");
    }
    else{
      const length = parseInt(textPWLenght,10);//10 có nghia là hệ thập phân
      let char = '';
      if(isSelectedLower)
        char += 'abcdefghijklmnopqrstuvwxyz';
      if(isSelectedUpcase)
        char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(isSelectedNumber)
        char +='0123456789';
      if(isSelectedSymbol)
        char += '!@#$%^&*()';
      let pw = '';
      for(let i = 0; i<length; i++){
        const random = Math.floor(Math.random()*char.length);
        pw += char[random];
      }
      setTextPassword(pw);
    }
  }




  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.body1}>
          <TextInput style={styles.textInput1} value={textPassword} onChangeText={setTextPassword}></TextInput>

        </View>
        <View style={styles.body2}>
          <View style={styles.row}>
            <Text style={styles.text}>Password length</Text>
            <TextInput style={styles.textInput2} value={textPWLenght} onChangeText={setTextPWLenght}></TextInput>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Include lower case letters</Text>
            <CheckBox style={styles.checkBox} value = {isSelectedLower} onValueChange={handleLower}></CheckBox>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Include upcase letters</Text>
            <CheckBox style={styles.checkBox} value = {isSelectedUpcase} onValueChange={handleUpcase}></CheckBox>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Include number</Text>
            <CheckBox style={styles.checkBox}  value = {isSelectedNumber} onValueChange={setIsSelectedNumber}></CheckBox>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Include special symbol</Text>
            <CheckBox style={styles.checkBox}  value = {isSelectedSymbol} onValueChange={setIsSelectedSymbol}></CheckBox>
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.generate}
          onPress={handlePassword}
           >GENERRATE PASSWORD</Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    backgroundColor: '#9292c0',

  },
  container: {
    width: '90%',
    backgroundColor: '#23235B',
    margin: 'auto',
    height: '90%',


  },
  header: {
    height: '20%',

  },
  body1: {
    height: '15%',
  },
  body2: {
    height: '40%',
  },
  footer: {
    height: '45%',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 'auto'
  },
  textInput1: {
    color: '#fff',
    backgroundColor: '#151537',
    height: 50,
    margin: 'auto',
    width: '90%'
  },
  textInput2: {
    backgroundColor: '#fff',
    height: 35,
    width: '40%',
  },
  text: {
    marginTop: '2%',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkBox: {
    height:35,
    width:35,
  },

  row: {
    marginLeft: '5%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:'5%'

  },
  generate: {
    marginTop: '15%',
    width: '80%',
    height: 50,
    paddingTop:'3%',
    alignItems:'center',
    marginLeft: '10%',
    fontSize: 22,
    fontWeight: 600,
    backgroundColor: '#3b3b98',
    color: '#fff',
  },

});
