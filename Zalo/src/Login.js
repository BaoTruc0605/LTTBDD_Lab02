import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Alert, Pressable, View, Image, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { ToastProvider } from 'react-native-toast-message';
import Review from './Review';



export default function App() {
  var namead = 'ad';
  var passwordad = 'pw';
  var [name, setName] = useState('');
  var [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (name === namead && password === passwordad)
      alert("Đăng nhập thành công với  name: "+ name + " ,Password:" + password)
    else
      alert("Đăng nhập không thành công với  name: "+ name + " ,Password:" + password)
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LOGIN</Text>

      </View>
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text) => setName(text)}></TextInput>
        <Image style={styles.image0} source={require('/img/user.png')}></Image>
        <Image style={styles.image1} source={require('/img/lock.png')}></Image>
        <Image style={styles.image2} source={require('/img/eye.png')}></Image>
        <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={(text) => setPassword(text)}></TextInput>
      </View>
      <View style={styles.footer}>
        {/* <Pressable style={styles.button}
          onPress={handleLoginPress}>
          {({ pressed }) => ( 
            <Text style={pressed ? { color: 'blue' } : { color: 'black' }}>
              LOGIN
            </Text>
          )
          }
        </Pressable> */}
        <button style={styles.button} onClick={handleLoginPress}>LOGIN</button>
        <TouchableOpacity>
          <Text style={styles.text}>Forgot your password?</Text>
        </TouchableOpacity>

      </View>
    </View >
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundImage: 'linear-gradient(#FBCB00, #BF9A00)',
  },
  header: {
    height: '30%',
    display: 'flex',
    justifyContents: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    height: '30%',
    position: 'relative',
  },
  footer: {
    height: '40%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#d7b93b',
    paddingLeft: '12%',
    width: '90%',
    height: 50,
    marginLeft: '5%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    fontWeight: 400,
  },
  image0: {
    width: 36,
    height: 36,
    position: 'absolute',
    marginLeft: '6%',
    marginTop: '2%',
  },
  image1: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginLeft: '6%',
    marginTop: '20%',
  },
  image2: {
    width: 36,
    height: 36,
    position: 'absolute',
    marginLeft: '82%',
    marginTop: '20%'
  },
  button: {
    width: '90%',
    height: 50,
    marginLeft: '5%',
    backgroundColor: '#000',
    fontSize: 30,
    fontWeight: 530,
    color: "#fff"
    // width: '90%',
    // height: 30,
    // marginLeft: '5%',
    // borderColor: 'gray',
    // borderWidth: 1,
    // textAlign: 'center',
    // fontSize: 20,
    // fontWeight: 'bold',
    // borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  }


});
