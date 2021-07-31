import React from 'react'
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'
import Person from './src/copy/Person'
import * as F from './src/data'


const people: F.IPerson[] = F.makeArray(10).map(F.createRandomPerson)

// prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList data={people}
                renderItem={({item}) => <Person person={item} />}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>} />
    </SafeAreaView>
  )
}

//prettier-ignore
const styles = StyleSheet.create({
  flex:{flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: color(Colors.grey500).lighten(0.3).string()}
})