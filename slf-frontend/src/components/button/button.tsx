import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import buttonStyle from './style';

// Le composant ButtonProps est une interface qui décrit les propriétés de Button
interface ButtonProps {
  title: string; // Le titre du bouton
  onPress?: () => void; // La fonction à exécuter lorsque le bouton est pressé
  style?: StyleProp<ViewStyle>; // Le style personnalisé pour le bouton
  textColor?: string; // La couleur du texte
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'; // La transformation du texte
  children?: React.ReactNode; // Les enfants du bouton
}

// Le composant Button est une fonction qui accepte les propriétés définies dans l'interface ButtonProps
export default function Button({ title, onPress, style, textColor, textTransform, children }: ButtonProps) {

  const buttonStyles = buttonStyle()

  return (
    <TouchableOpacity style={[buttonStyles.container, style]} onPress={onPress}>
      {children}
      <Text style={{ color: textColor || "white", fontSize: 16 , textTransform: textTransform || "none" }}>{title}</Text>
    </TouchableOpacity>
  )
}