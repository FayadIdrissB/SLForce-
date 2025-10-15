import { View, Text, Alert } from 'react-native'
import React from 'react'
import { createHomeStyle } from '../../../styles/index.style'
import { creatLogoStyle } from '../../../styles/logo.style'
import { createFormStyle } from '../../../styles/form.style'
import Logo from '../../../components/logo'
import Button from '../../../components/button'
import Input from '../../../components/input'

export default function LoginPage({isLogin, toggleAuth}: {isLogin: boolean, toggleAuth: () => void}) {


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
          <Button title='Connexion' onPress={toggleAuth} style={[{backgroundColor: isLogin ? 'blue' : 'blue-light', borderRadius: 5},formStyle.linkForm]} textColor={isLogin ? 'white' : 'black'}/>
          <Button title='Inscription' onPress={toggleAuth} style={[{backgroundColor: isLogin ? 'blue-light' : 'blue', borderRadius: 5,},formStyle.linkForm]} textColor={isLogin ? 'black' : 'white'}/>
        </View>
        
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" />
        <Input label="Password" placeholder="ton.password" value=""/>

        <Button style={formStyle.button} title="Se Connecter" onPress={() => {Alert.alert("Connecté")}} />
      </View>

      {/* Link */}
      <View style={formStyle.linkContainer}>
        <Text style={formStyle.link}>Pas encore inscrit ? <Text style={formStyle.linkText} onPress={toggleAuth}>Rejoins-nous !</Text></Text>
      </View>
    </View>
  )
}
