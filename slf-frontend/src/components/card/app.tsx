import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'
import styleCard from './style'

interface CardProps {
  label?: string
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ style, children, label }) => {
  const cardStyles = styleCard()
  return (
    <View style={[{ padding: 5}, cardStyles.shadow]}>
      {label && <Text style={cardStyles.label}>{label}</Text>}
      <View style={[cardStyles.container, style]}>
        {children}
      </View>
    </View>
  )
}

export default Card
