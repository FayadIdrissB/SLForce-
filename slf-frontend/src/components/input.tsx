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
  ionicon1?: React.ReactNode
  ionicon2?: React.ReactNode
}

export default function Input({ label, placeholder, value, context, secureTextEntry, keyboardType, ionicon1, ionicon2 }: InputProps) {

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
  inputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    padding: 5,
  },
})

