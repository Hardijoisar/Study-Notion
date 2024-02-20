import React from 'react'
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const Template = ({title, desc1, desc2, formtype, setLogin}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            <div>
                {formtype === "login" ? 
                (<LoginForm setLogin={setLogin}></LoginForm>) :
                (<SignupForm setLogin={setLogin}></SignupForm>) }
            </div>
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>
                    {
                        formtype === 'login' ? 
                        (<p>Login</p>) : 
                        (<p>Signup</p>)
                    }
                    with Google
                </p>
                    </button>
        </div>
    </div>
  )
}
