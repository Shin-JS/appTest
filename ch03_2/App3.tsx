import React from 'react'
//prettier-ignore
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>
    </SafeAreaView>
  )
}

//prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: color(Colors.blue500).lighten(0.9).string()}
})
