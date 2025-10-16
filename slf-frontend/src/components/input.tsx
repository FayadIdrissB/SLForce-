import { View, Text, TextInput, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Ionicons } from "@expo/vector-icons"

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  value: string | number;
  context?: any // PropsWithChildren<TextInputProps>
}

export default function Input({ label, placeholder, value, context, secureTextEntry, keyboardType }: InputProps) {

  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType}  {...context} />
    </View>
  )
}

const styles = StyleSheet.create({

  formGroup: {
    gap: 4,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
  },
})

