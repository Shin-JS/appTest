import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {Platform} from 'react-native'

console.log(Platform.OS)
export default function App(){
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello world!</Text>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  safeAreaView: {},
  text: {}
})