import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>
  textColor?: string
  children?: React.ReactNode
}

export default function Button({ title, onPress, style, textColor, children }: ButtonProps) {
  return (
    <View style={[{ padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }, style]}>
      {children}
      <Text style={{ color: textColor || "white", fontSize: 16 }} onPress={onPress}>{title}</Text>
    </View>
  )
}