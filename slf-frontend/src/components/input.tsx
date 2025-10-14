import { View, Text, TextInput, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface InputProps {
    label?: string;
    placeholder: string;
    value: string | number;
    context?: any // PropsWithChildren<TextInputProps>
}

export default function Input({ label, placeholder, value, context }: InputProps) {
    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} value={value}  {...context} />
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
  },
})

