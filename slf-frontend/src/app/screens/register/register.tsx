import { View, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import { createHomeStyle } from '../../../styles/index.style'
import { creatLogoStyle } from '../../../styles/logo.style'
import { createFormStyle } from '../../../styles/form.style'
import Logo from '../../../components/logo'
import Button from '../../../components/button'
import Input from '../../../components/input'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'

export default function RegisterPage({isLogin, toggleAuth}: {isLogin: boolean, toggleAuth: () => void}) {

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
      <ScrollView style={{padding: 5}}>
        <View style={formStyle.formContainer}>

        <View style={formStyle.linkFormContainer}>
          <Button title='Connexion' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue' : 'blue-light', borderRadius: 5 }, formStyle.linkForm]} textColor={isLogin ? 'white' : 'black'}/>
          <Button title='Inscription' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue-light' : 'blue', borderRadius: 5 }, formStyle.linkForm]} textColor={isLogin ? 'blue' : 'white'} />
        </View>

        {/* Input */}
        <Input label='Prenom' placeholder='ton.prenom' value=''/>
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" />
        <Input label="Password" placeholder="ton.password" value="" />
        <Input label="Confirm Password" placeholder="..........." value="" />
  
          
          {/* Button Function */}
          <View style={formStyle.buttonFunctionContainer}>
            <Button title='elève' onPress={() => { Alert.alert("Connecté") }} style={[formStyle.buttonFunction, {backgroundColor: 'blue'}]}>
              <Ionicons name="barbell" size={24} color="yellow" />
            </Button>
            <Button title='coach' onPress={() => { Alert.alert("Connecté") }} style={[formStyle.buttonFunction, {backgroundColor: '#dedede', borderRadius: 5,  borderColor: '#f1f0f2', borderWidth: 1}]}>
              <Ionicons name="person" size={24} color="yellow" />
            </Button>
          </View>

          {/* Button */}          
        <Button style={formStyle.button} title="Rejoindre Bearlift" onPress={() => { Alert.alert("Connecté") }} >
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
