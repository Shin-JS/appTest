import React from 'react'
//prettier-ignore
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex]}
        source={require('./src/assets/images/bg.jpg')}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1}
})