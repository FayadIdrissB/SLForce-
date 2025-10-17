import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'


interface CardProps {
    style?: StyleProp<ViewStyle>
    children: React.ReactNode
}


export default function Card({style, children}: CardProps) {
  return (
    <View style={style}>
      {children}
    </View>
  )
}