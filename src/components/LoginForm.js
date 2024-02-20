import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';


export const LoginForm = ({setLogin}) => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username : "", 
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false);

    function showPasswordHandler()
    {
        setShowPassword(!showPassword)
    }

    const changeHandler = (event) => {
        const {name, value,  type} = event.target;

        setLoginData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        setLogin(true);
        toast.success("You have been logged in");
        console.log(loginData);
        navigate("/dashboard");
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Email Address
                <sup>*</sup>
                <br></br>
            <input type='email' name='username' placeholder='abc@gmail.com' value={loginData.username} onChange={changeHandler} required ></input>
            </label>
            <br></br><br></br>
            <label>Password<sup>*</sup>
            <br></br>
            <input  type= {showPassword === true ? ('text') : ('password')} onChange={changeHandler} value={loginData.password} required placeholder='Enter password' name='password'></input>
            <p onClick={showPasswordHandler}>
                { !showPassword &&
                    <span>
                    Show Password
                    </span>
                }
                {
                    showPassword && 
                    <span>
                        Hide Password
                    </span>
                }
            </p>
            </label>

            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}
