import React from 'react'
import { Template } from '../components/Template'

export const Signup = ({setLogin}) => {
  return (
    <div>
      {/* title, desc1, desc2, formtype, setLogin */}
      <Template
      title="Sign Up"
      desc1= "Signup by filling the details"
      desc2= "Fill the details carefully"
      formtype="signup"
      setLogin={setLogin}
      >
      </Template>

    </div>
  )
}
