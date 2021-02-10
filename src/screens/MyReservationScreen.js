// import React from 'react';
// import {  Text, View, StyleSheet } from 'react-native';


// export default function MyReservationScreen({navigation}) {
//   return (
//     <View>
//       <Text style = {styles.container}>this is My Reservation Screen</Text>
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

const MyReservationScreen = () => {
    return (
      <View style={styles.container}>
        <Text>My Reservation Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default MyReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});