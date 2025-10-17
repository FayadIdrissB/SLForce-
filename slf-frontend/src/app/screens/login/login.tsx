import { View, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import { createHomeStyle } from '../../../styles/index.style'
import { creatLogoStyle } from '../../../components/logo/logo.style'
import createFormStyle from '../style/form.style'
import Logo from '../../../components/logo/logo'
import Button from '../../../components/button'
import Input from '../../../components/input'
import { AntDesign, Ionicons } from "@expo/vector-icons"
import useTogglePasswrdView from '../../../hooks/togglePasswrdView'

export default function LoginPage({isLogin, toggleAuth}: {isLogin: boolean, toggleAuth: () => void}) {


  const homeStyle = createHomeStyle()
  const logoStyle = creatLogoStyle()
  const formStyle = createFormStyle()

  const {isPasswordVisible, togglePasswordVisibility} = useTogglePasswrdView()

  return (
    <View style={homeStyle.container}>

      {/* Logo */}
      <Logo style={logoStyle.logoContainer} imageStyle={logoStyle.logo}/>

      {/* Title Logo */}
      <View style={logoStyle.titleContainer}>
        <Text style={logoStyle.title}>bearlift</Text>
        <Text style={logoStyle.subtitle}>Street Workout Community</Text>
      </View>

      {/* Form */}
      <ScrollView style={{padding: 5}}>
        <View style={formStyle.formContainer}>

        <View style={formStyle.linkFormContainer}>
          <Button title='Connexion' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue' : 'blue-light', borderRadius: 5, }, formStyle.linkForm]} textColor={isLogin ? 'white' : 'black'}/>
          <Button title='Inscription' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue-light' : 'blue', borderRadius: 5,}, formStyle.linkForm]} textColor={isLogin ? 'blue' : 'white'} />
        </View>

        {/* Input */}
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" secureTextEntry={false} keyboardType="email-address" ionicon1={<Ionicons name="mail" size={24} color="blue" />} />
          <Input label="Password" placeholder="ton.password" value="" secureTextEntry={!isPasswordVisible} keyboardType="default" ionicon1={<Ionicons name="lock-closed" size={24} color="blue" />} ionicon2={isPasswordVisible ? <Ionicons name="eye-off" size={24} color="blue" onPress={togglePasswordVisibility}/> : <Ionicons name="eye" size={24} color="blue" onPress={togglePasswordVisibility}/> } />
  

          {/* Button */}            
        <Button style={[formStyle.button,{gap: 10}]} title="Se Connecter" onPress={() => { Alert.alert("Connecté") }} >
          <AntDesign name="fire" size={24} color="yellow" />
        </Button>
      </View>

      {/* Link */}
      <View style={formStyle.linkContainer}>
        <Text style={formStyle.link}>Dejà membre ? <Text onPress={toggleAuth} style={formStyle.linkText}>Connecte-toi !</Text></Text>
      </View>
      </ScrollView>
    </View>
  )
}
