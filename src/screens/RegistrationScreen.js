import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Image, View, TextInput,ActivityIndicator, Text, TouchableOpacity } from 'react-native';

// import axios from "axios";
import ValidationComponent from 'react-native-form-validator';

import logo from "../../assets/logo.png";


class RegistrationScreen extends ValidationComponent {


  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text })
      this.setState.email = false
      return false;
    }
    else {
      this.setState({ email: text })
      this.setState.email = true
      console.log("Email is Correct");
    }
  }
  


  constructor(props)
  {
    super(props);

    this.state = {
      name:'',
      email:'',
      Password:'',
      confirmPassword: '',
      isLoading:false
    };

  }


  // _onSubmit() {
  //   // Call ValidationComponent validate method
  //   this.validate({
  //     email: {email: true},
  //   });
  // }

  register = () => {

    const { navigation } = this.props;
    
    if ( this.state.name == "" ){
      alert('Please Enter Your Name');
    }
    else if(this.state.email == "")
    {
      alert("Please Enter Your Email");
    }
    else if(this.setState.email == false)
    {
      alert("Please Enter valid Email address");
    }
    else if(this.state.password == null )
    {
      alert("Please Enter Your Password");
    }
    else if(this.state.confirmPassword !== this.state.password){
      alert("Please Your Password doesnt match");
    }
    else{

      // this.setState({isLoading:true});
      
      //10.0.0.2 -- use this ip for android emulator
      //192.168.0.111 --use this ip for expo from mobile
      // fetch('http://10.0.0.2/easytable/data.php', {
      fetch('http://192.168.0.111/easytable/data.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email:this.state.email,
                password: this.state.password,
            })
        })

            .then((response) => response.json())
            .then((responseData) => {
            
              
             // console.log("RESULTS HERE:", responseData);

            
            if(responseData == 1) {

              //write code to navigate to login screen

              // this.setState({isLoading:true})
              alert("Sorry, this email address is aldreay register.");
              
           
            }
            else{
              alert("User Registration Successfully, You can Login Now");

              navigation.navigate('Login');
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
      </View>
      <View style={styles.footer}>
        <Image style={styles.image} source={logo}/>  
        <TextInput 
          style={styles.txtInput} 
          autoCapitalize="none" 
          placeholder = "Username"
          value={this.state.name}
          onChangeText = {(name) => this.setState({name})}
         
         />      
        <TextInput 
          style={styles.txtInput} 
          autoCapitalize="none" 
          placeholder = "Email address"
          keyboardType = {'email-address'}
          value={this.state.email}
          // onChangeText = {(email) => this.setState({email})}
          // onChangeText={(val) => inputText2(val)}
          onChangeText={(text) => this.validate(text)}
        />
        <TextInput 
          style={styles.txtInput} 
          autoCapitalize="none" 
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText = {password => this.setState ({password})}
        />
          <TextInput 
          style={styles.txtInput} 
          autoCapitalize="none" 
          placeholder="Confirm Password"
          secureTextEntry
          value={this.state.confirmPassword}
          onChangeText = {confirmPassword => this.setState ({confirmPassword})}
          // onChangeText={(val) => inputText3(val)}
          // onChangeText={passwordHandler}
        />
        {/* <ActivityIndicator size="large" style={{paddingTop:20}} color="#0000ff" animating = {this.state.isLoading}  /> */}
        {/* <TextInput 
          style={styles.txtInput} 
          autoCapitalize="none" 
          placeholder="Confirm Password"
          secureTextEntry
          // onChangeText={(val) => inputText4(val)}
          onChangeText={(text) => setPassword(text)}
        /> */}
        {/* {data.checkInputText ? */}
          <TouchableOpacity 
            style={styles.button}
             onPress={this.register}
          >
            <Text>Register</Text>            
          </TouchableOpacity>
          {/* // :<Text style={styles.fakeBtn}>Next</Text>          
        }                          */}
      </View>      
    </View>
  );
  }
}


export default RegistrationScreen

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    flex: 5,
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 30,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  chooseBtnBox:{
    flexDirection: "row",
  },
  chosenBtn:{
    color: "#f5a8a8",  
    borderBottomWidth: 1,
    borderColor:'#f5a8a8',
    margin: 10,
    padding: 10,
  },
  unChosenBtn:{
    color: "grey",  
    borderBottomWidth: 1,
    borderColor:'grey',
    margin: 10,
    padding: 10,
  },
  txtInput:{
    marginTop: '5%',
    width: '70%',
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