import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, } from 'react-native';




export default function ResetForm({navigation}) {

//   const [data, setData] = useState({
//     email:'',
//     checkTextField: false
//   });

//   const changeTextField = (val) => {
//     if (val.length === 0){
//       setData({
//         ...data,
//         email: val,
//         checkTextField: false
//       })
//     }else{
//       setData({
//         ...data,
//         email: val,
//         checkTextField: true
//       })
//     }
//   }

  
  return (
    <View style={styles.container}>
      <StatusBar style="inverted"/>
      <View style={styles.header}>
        <Text style={styles.txt2}> Find your account</Text>
        <Text style={styles.txt1}>Enter your email address or phone number lisked to your account.</Text>
      </View>
      <View style={styles.footer}>
        
        <TextInput
          style={styles.txtInput}
          placeholder='Email address or phone number'
          onChangeText={(val) =>changeTextField(val)}  
        />

        {/* { data.checkTextField ? */}
          <TouchableOpacity 
            style={styles.button}
            onPress = { () => navigation.navigate('CodeForm')}
          >
            <Text>Next</Text>
          </TouchableOpacity>
          {/* :<Text style={styles.fakeBtn}>Next</Text>           */}
        {/* }                   */}
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  txt1:{
    width: '90%',
    color: "#e8e8e8",
    fontSize: 15,
    textAlign: 'center'
  },
  txt2:{
    width: '90%',
    color: "#e8e8e8",
    fontSize: 40
  },
  header:{
    flex: 3,
    alignItems:'center',
    justifyContent: 'flex-end',
    bottom: 10
  },
  footer:{
    flex: 7,
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  txtInput:{
    marginTop: '15%',
    width: '80%',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    color: "#000000",
    fontSize: 15,
    width: '90%'
  },
  transparentbtn:{
    marginTop: '5%',
  },
  button:{
    width: '50%',
    marginTop: '15%',
    backgroundColor: '#f5a8a8',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center'
  },
  fakeBtn:{
    width: '50%',
    marginTop: '15%',
    backgroundColor: '#30475e',
    borderRadius: 30,
    padding: 10,
    textAlign: 'center'}
});