import { View, Text, Alert } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Button from '../components/button'
import Logo from '../components/logo'
import Input from '../components/input'
import { createHomeStyle } from '../styles/index.style'
import { creatLogoStyle } from '../styles/logo.style'
import { createFormStyle } from '../styles/form.style'

export default function Home() {

  const homeStyle = createHomeStyle()
  const logoStyle = creatLogoStyle()
  const formStyle = createFormStyle()

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
      <View style={formStyle.formContainer}>

        <View style={formStyle.linkFormContainer}>
          <Button title='Connexion' onPress={() => { }} style={[{backgroundColor: 'blue', borderRadius: 5},formStyle.linkForm]} />
          <Button title='Inscription' onPress={() => { }} style={[{backgroundColor: 'blue-ligh', borderRadius: 5},formStyle.linkForm]} />
        </View>
        
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" />
        <Input label="Password" placeholder="ton.password" value=""/>

        <Button style={formStyle.button} title="Se Connecter" onPress={() => {Alert.alert("Connecté")}} />
      </View>

      {/* Link */}
      <View style={formStyle.linkContainer}>
        <Text style={formStyle.link}>Pas encore inscrit ? <Link href="/register" style={formStyle.linkText}>Rejoins-nous !</Link></Text>
      </View>
    </View>
  )
}
