import React from 'react'
import {SafeAreaView, Alert, Button} from 'react-native'

export default function App(){
    return <SafeAreaView>
        <Button title='Test'
        onPress={()=> Alert.alert('testPress', 'hello world')}/>
    </SafeAreaView>
}