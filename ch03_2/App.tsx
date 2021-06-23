import React from 'react'
//prettier-ignore
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'

const {width, height} = Dimensions.get('window')

export default function App() {
   return (
     <SafeAreaView style={[styles.safeAreaView]}>
       <Text style={[styles.text, {color: 'white'}]}>os: {Platform.OS}</Text>
       <Text style={[styles.text, {color: 'yellow'}]}>width: {width}px</Text>
       <Text style={[styles.text, {color: 'orange'}]}>height: {height}px</Text>
       <View style={[styles.box, {borderRadius: 10}]}/>
       <View style={[styles.box, styles.border]}/>
       <View style={[styles.box, styles.border, {borderRadius: 10}]}/>
     </SafeAreaView>
   )
}

//prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: {marginBottom: 10, fontSize: 20, color: color(Colors.blue500).lighten(0.9).string()},
  box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth: 10, borderColor: Colors.lime500}
})