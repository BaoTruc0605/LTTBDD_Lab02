import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity,Area, Pressable ,Alert} from 'react-native';


export default function App() {
  var [text, setText] = useState('');
  const handleSubmitPress = () => {
   alert('Comment: ' + text )
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image style={styles.image0} source={require('/img/usb.png')}></Image>
          <Text style={styles.name}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>

      </View>
      <View style={styles.body1}>
        <Text style={styles.title}>Cực kỳ hài lòng</Text>
        <View style={styles.start}>
          <TouchableOpacity style={styles.buttonLogo}>
            <Image style={styles.image1} source={require('/img/star.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogo}>
            <Image style={styles.image1} source={require('/img/star.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogo}>
            <Image style={styles.image1} source={require('/img/star.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogo}>
            <Image style={styles.image1} source={require('/img/star.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogo}>
            <Image style={styles.image1} source={require('/img/star.jpg')}></Image>
          </TouchableOpacity>
        </View>
        

      </View>
      <View style={styles.body2}>
      <Image style={styles.image2} source={require('/img/camera.png')}></Image>
        <button style={styles.camera}>Thêm hình ảnh</button>
      </View>
      <View style={styles.footer}>
        <TextInput style={styles.cmt} placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' multiline={true} numberOfLines={4} placeholderTextColor="gray" value={text} onChangeText={(text) => setText(text)}></TextInput>
        <Pressable style={styles.submit}
        onPress={handleSubmitPress}
        >Gửi</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundImage: '#fff',
  },
  header: {
    height: '20%',
  },
  body1: {
    height: '20%',
  },
  body2: {
    height: '15%',
  },
  footer: {
    height: '45%',
    width:'100%'
  },
  row: {
    marginLeft: '5%',
    marginTop: '5%',
    display: 'flex',
    justifyContents: 'flex-start',
    flexDirection: 'row',
  },
  image0: {
    width: 70,
    height: 49,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  start: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    backgroundColor: '#fff'

  },
  image1: {
    width: 64,
    height: 64,
  },
  image2: {
    width:45,
    height: 45,
    position: 'absolute',
    marginTop:'3%',
    marginLeft:'14%'

  },
  camera: {
    width: '80%',
    height: 70,
    marginLeft: '10%',
    fontSize: 22,
    fontWeight: 600,
    borderWidth:2,
    borderColor:'blue',
    borderRadius:10,
  },
  cmt: {
    paddingLeft: '5%',
    width: '80%',
    marginLeft: '10%',
    height:'70%',
    borderColor:'#bbb',
    borderWidth: 1,
    fontSize: 20,
    fontWeight: 500,
  },
  submit: {
    marginTop:'5%',
    width: '80%',
    height: 50,
    marginLeft: '10%',
    fontSize: 22,
    fontWeight: 600,
    borderWidth:2,
    borderColor:'blue',
    backgroundColor:'#0d5db6',
    borderRadius:10,
    color: '#fff',
  },






});
