// import { StatusBar } from 'expo-status-bar';
// import React  from 'react';
// import { StyleSheet, View, Text} from 'react-native';


// export default function HomeScreen({navigation}) {
//   return (
//     <View>
//       <StatusBar style="inverted"/>
//       <Text style = {styles.container}>this is home Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5a8a8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar style="inverted"/>
        <View style={styles.header1}>
          {/* <Image style={styles.image} source={logo}/> */}
          <View style={styles.header}></View>

        </View>        
        <View style={styles.middle}>
          <Text>Home Screen</Text>
          <Button
            title="Click Here"
            onPress={() => alert('Button Clicked!')}
          />
        </View>
        <View style={styles.footer1}>
          <View style={styles.footer2}></View>
        </View>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: "#30475e",
  },
  header1:{
    flex: 0.5, 
    backgroundColor: "#e8e8e8",
  },
  header:{
    flex: 1,    
    borderBottomEndRadius: 40,
    backgroundColor: '#30475e'
  },
  middle:{
    flex: 5,
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 40,
    borderBottomEndRadius: 40,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer1:{
    flex: 0.18,
    backgroundColor: '#e8e8e8',
  },
  footer2:{
    flex: 1,
    backgroundColor: '#30475e',
    borderTopLeftRadius: 100,
  }
});
