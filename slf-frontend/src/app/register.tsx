import { View, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../components/logo'
import { Link } from 'expo-router'
import Button from '../components/button'
import Input from '../components/input'
import { createHomeStyle } from '../../assets/styles/index.style'
import { creatLogoStyle } from '../../assets/styles/logo.style'
import { createFormStyle } from '../../assets/styles/form.style'

export default function RegisterPage() {

  const homeStyle = createHomeStyle()
  const logoStyle = creatLogoStyle()
  const formStyle = createFormStyle()

  return (
    <View style={homeStyle.container}>

      {/* Logo */}
      <Logo style={logoStyle.logoContainer} imageStyle={logoStyle.logo} />

      {/* Title Logo */}
      <View style={logoStyle.titleContainer}>
        <Text style={logoStyle.title}>bearlift</Text>
        <Text style={logoStyle.subtitle}>Street Workout Community</Text>
      </View>

      {/* Form */}
      <ScrollView>
        <View style={formStyle.formContainer}>

        <View style={formStyle.linkFormContainer}>
          <Button title='Connexion' onPress={() => { }} style={[{ backgroundColor: 'blue-light', borderRadius: 5 }, formStyle.linkForm]} />
          <Button title='Inscription' onPress={() => { }} style={[{ backgroundColor: 'blue', borderRadius: 5 }, formStyle.linkForm]} />
        </View>

        <Input label='Prenom' placeholder='ton.prenom' value=''/>
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" />
        <Input label="Password" placeholder="ton.password" value="" />
        <Input label="Confirm Password" placeholder="..........." value="" />

        <Button style={formStyle.button} title="Se Connecter" onPress={() => { Alert.alert("Connecté") }} />
      </View>

      {/* Link */}
      <View style={formStyle.linkContainer}>
        <Text style={formStyle.link}>Dejà membre ? <Link href="/login" style={formStyle.linkText}>Connecte-toi !</Link></Text>
      </View>
      </ScrollView>
    </View>
  )
}
