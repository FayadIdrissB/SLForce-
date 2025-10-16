import { View, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import createFormStyle from '../style/form.style'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import { createHomeStyle } from '../../../styles/index.style';
import { creatLogoStyle } from '../../../components/logo/logo.style';
import Logo from '../../../components/logo/logo';
import Button from '../../../components/button';
import Input from '../../../components/input';
import useToggleFunc from '../../../hooks/useYoggleFun';

export default function RegisterPage({isLogin, toggleAuth}: {isLogin: boolean, toggleAuth: () => void}) {

  const homeStyle = createHomeStyle()
  const logoStyle = creatLogoStyle()
  const formStyle = createFormStyle()

  const {isCoach, toggleCoach, fadeAnime} = useToggleFunc()

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
          <Button title='Connexion' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue' : 'blue-light', borderRadius: 5, }, formStyle.linkForm]} textColor={isLogin ? 'white' : 'black'}/>
          <Button title='Inscription' onPress={toggleAuth} style={[{ backgroundColor: isLogin ? 'blue-light' : 'blue', borderRadius: 5,}, formStyle.linkForm]} textColor={isLogin ? 'blue' : 'white'} />
        </View>

        {/* Input */}
        <Input label='Prenom' placeholder='ton.prenom' value='' secureTextEntry={false} keyboardType=""/>
        <Input label="Email" placeholder="ton.email@gmail.fr" value="" secureTextEntry={false} keyboardType="email-address" />
          <Input label="Password" placeholder="ton.password" value="" secureTextEntry={true} keyboardType="default" />
        <Input label="Confirm Password" placeholder="..........." value="" secureTextEntry={true} keyboardType="default" />
  
          
          {/* Button Function */}
          <View style={formStyle.buttonFunctionContainer}>
            <Button title='elève' onPress={toggleCoach} style={[formStyle.buttonFunction, {backgroundColor: isCoach ? '#f1f1f1' : 'blue', borderRadius: 5}]} textColor={isCoach ? 'black' : 'white'} textTransform="capitalize" >
              <Ionicons name="barbell" size={24} color="yellow" />
            </Button>
            <Button title='coach' onPress={toggleCoach} style={[formStyle.buttonFunction, {backgroundColor: isCoach ? "blue" : '#f1f1f1', borderRadius: 5}]} textColor={isCoach ? 'white' : 'black'} textTransform="capitalize" >
              <Ionicons name="person" size={24} color="yellow" />
            </Button>
          </View>

          {/* Button */}            
        <Button style={[formStyle.button,{gap: 10}]} title="Rejoindre Bearlift" onPress={() => { Alert.alert("Connecté") }} >
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
