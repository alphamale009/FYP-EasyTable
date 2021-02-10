import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Image, View, TextInput, Text, TouchableOpacity} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import logo from "../../assets/logo.png";

class LoginScreen extends Component {


  
  constructor(props)
  {
    super(props);

    this.state = {
      
      email:null,
      Password:null,
      isLoading:false
    };

  }


  Forgotpassword = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgotPassword');
  }

  Registration = () => {
    const { navigation } = this.props;
    navigation.navigate('Registration');  
  }

  login = () => {

    const { navigation } = this.props;

    if(this.state.email == "" || this.state.padding == ""){
      alert("Please Enter Email or Password");
    }
    
    else{

      //10.0.0.2 -- use this ip for android emulator
      //192.168.0.111 --use this ip for expo from mobile
      // fetch('http://10.0.0.2/easytable/login.php', {
      fetch('http://192.168.0.111/easytable/login.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:this.state.email,
            password: this.state.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
                 
         // console.log("RESULTS HERE:", responseData);

        if(responseData == 1) {

          //write code to navigate to login screen

          //this.setState({isLoading:false})
		  
          navigation.navigate('MainStackScreen');
  
        }
        else{
          alert("Sorry, Email address or password is Incorrect.");

        }
      })
      .catch((error) =>{
        console.error(error);
      }) 

    }
  }


  render(){
    
    return (
      <View style={styles.container}>
        <StatusBar style="inverted"/>
        <View style={styles.header}>
          <Image style={styles.image} source={logo}/>
        </View>
        <View style={styles.footer}>
            <View style={styles.input}>
              <TextInput 
                style={styles.txtInput} 
                autoCapitalize="none" 
                placeholder="Email"                
                value={this.state.email}
                onChangeText = {(email) => this.setState({email})}
              />        
            </View>
            <View style={styles.input}>
              <TextInput 
                style={styles.txtInput} 
                autoCapitalize="none" 
                placeholder="Password"
                value={this.state.password}
                onChangeText = {(password) => this.setState({password})}
              />
            </View>
            <TouchableOpacity 
              style={styles.transparentbtn} 
              // onPress = { () => navigation.navigate('Forgotpassword') } 
              onPress = { this.Forgotpassword}
            >
              <Text style={{color: '#e19999'}}>forgot password</Text>
            </TouchableOpacity>
            {/* {data.checkInputText && data.checkInputPassword ? */}
            <TouchableOpacity 
              style={styles.button}
              onPress = {this.login}
            >
              <Text>Sign In</Text>            
            </TouchableOpacity >


            {/* :<Text style={styles.fakeBtn}>LogIn</Text>          
            } */}
            <TouchableOpacity 
              style={styles.transparentbtn}
              // onPress = { () => navigation.navigate('Registration') }
              onPress = { this.Registration}
            >
              <Text style={{color: '#e19999'}}>Register</Text>
            </TouchableOpacity>                 
        </View>      
      </View>
    );
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  image:{
    width: '75%',
    resizeMode: "contain"
  },
  header:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    flex: 5,
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  input:{
    marginTop: '5%',
    width: '80%',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: 'center'
  },
  txtInput:{
    color: "#000000",
    fontSize: 15,
    width: '90%'
  },
  transparentbtn:{
    marginTop: '5%',
  },
  checkBoxContainer:{
    marginTop: '5%',
    flexDirection: "row",
    alignItems: 'center'
  },
  checkBox:{
    color: '#f5a8a8'
  },
  button:{
    width: '50%',
    marginTop: '20%',
    backgroundColor: '#f5a8a8',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center'
  },  
  fakeBtn:{
    width: '50%',
    marginTop: '20%',
    backgroundColor: '#30475e',
    borderRadius: 30,
    padding: 10,
    textAlign: 'center'}
});