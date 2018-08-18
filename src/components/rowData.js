import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const rowData = (props) =>{
  return(
<View style={styles.container}>
    <Text style={styles.text}>Hello</Text>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text:{
    fontSize:40,
    color:'#8e24aa',
},

});

export default rowData


