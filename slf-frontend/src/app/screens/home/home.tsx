import React from 'react'
import ScreenLayout from '../_layout'
import RegisterPage from '../register/register'
import LoginPage from '../../screens/login/login'
import useToggleAuth from '../../../hooks/useToggleAuth'

export default function Home() {
  const {isLogin, toggleAuth} = useToggleAuth()

  return (
      <ScreenLayout>
          {isLogin ? <LoginPage isLogin={isLogin} toggleAuth={toggleAuth} /> : <RegisterPage isLogin={isLogin} toggleAuth={toggleAuth} />}
      </ScreenLayout>
  )
}
