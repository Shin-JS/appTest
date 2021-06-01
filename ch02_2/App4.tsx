import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App(){
    const isLoading = true
    const children = isLoading ? (
        <Text>Loading...3</Text>
    ) : (
        <Text>Hello JSX World!3</Text>
    )
    return <SafeAreaView>{children}</SafeAreaView>
}