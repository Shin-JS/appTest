import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App(){
    const isLoading = true
    return(
        <SafeAreaView>
            {isLoading && <Text>Loading...2</Text>}
            {!isLoading && <Text>Hello JSX World2!</Text>}
        </SafeAreaView>
    )
}