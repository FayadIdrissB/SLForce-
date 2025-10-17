import { View, Text, TextInput, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Ionicons } from "@expo/vector-icons"
import inputStyle from './style';

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  value: string | number;
  context?: any // PropsWithChildren<TextInputProps>
  ionicon1?: React.ReactNode
  ionicon2?: React.ReactNode
}

export default function Input({ label, placeholder, value, context, secureTextEntry, keyboardType, ionicon1, ionicon2 }: InputProps) {

  const styles = inputStyle()

  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputGroup}>
        {ionicon1}
        <TextInput style={styles.input} placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType}  {...context} />
        {ionicon2}
      </View>
    </View>
  )
}

