import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ScreenLayout({children}: {children: React.ReactNode}) {
    return (
        <View style={{ flex: 1, backgroundColor: "white"}}>
            {children}
        </View>
    )
}