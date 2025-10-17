
import { View, StyleSheet, StyleProp, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import imagePath from '../../constants/imagePath'

    
interface LogoProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
}

export default function Logo({ style, imageStyle }: LogoProps) {
  return (
    <View style={style}>
      <Image 
        style={imageStyle || styles.image} 
        source={imagePath.logo} 
        contentFit="contain" 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
})

