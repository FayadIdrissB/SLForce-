import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export default function Button({title, onPress, style}: ButtonProps) {
  return (
    <View style={[{padding:10, alignItems: 'center', justifyContent: 'center', borderRadius: 5}, style]}>
          <Text style={{color: "white", fontSize: 16}} onPress={onPress}>{title}</Text>
    </View>
  )
}