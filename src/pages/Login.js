import React from 'react'
import { Template } from '../components/Template'

export const Login = ({setLogin}) => {
  return (
    <div>
      {/* title, desc1, desc2, formtype, setLogin */}
        <Template
          title= "Welcome back"
          desc1 = "Please enter your email address and password to access your account."
          desc2= "Desc of login page"
          formtype= 'login'
          setLogin= {setLogin}
        ></Template>
    </div>
  )
}
