// import React from 'react';
// import {  Text, View,StyleSheet } from 'react-native';


// export default function SearchScreen({navigation}) {
//   return (
//     <View>
//       <Text style = {styles.container}>This is Search Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#222831',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});