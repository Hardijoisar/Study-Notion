import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setLogin}) => {

    const [signupData, setSignupData] = useState({
        firstname : "",
        lastname : "",
        mailId : "",
        password : "", 
        confirmPassword : ""
    })

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    function showPasswordHandler()
    {
        setShowPassword(!showPassword)
    }

    const changeHandler = (event) => {
        const {name, value,  type} = event.target;

        setSignupData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        toast.success("You have been logged in")
        setLogin(true);
        
        const finalData = {
            ... signupData
        }
        console.log(finalData); 

        navigate('/dashboard')
    }


  return (
        // <p>This is the signup form from signupform.js</p>
    <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
        <form onSubmit={submitHandler}>
            <div>
                <span>
                    <div><label>First Name</label></div>
                    <div><input type='text' required onChange={changeHandler} name='firstname' value={signupData.firstname} ></input></div>
                </span>
                <span>
                    <div><label>Last Name</label></div>
                    <div><input type='text' required onChange={changeHandler} name='lastname' value={signupData.lastname} ></input></div>
                </span>
            </div>
            <div>
                <label>Email id</label>
                <div><input type='email' name='mailId' value={signupData.mailId} required onChange={changeHandler}></input></div>
            </div>
            <div>
                <span>
                    <label>Password<sup>*</sup>
                    <br></br>
                    <input  type= {showPassword === true ? ('text') : ('password')} onChange={changeHandler} value={signupData.password} required placeholder='Enter password' name='password'></input>
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
                </span>
                <span>
                <label>Password<sup>*</sup>
                    <br></br>
                    <input  type= {showPassword === true ? ('text') : ('password')} onChange={changeHandler} value={signupData.confirmPassword} required placeholder='Enter password' name='confirmPassword'></input>
                    <p onClick={showPasswordHandler}>
                        { showPassword &&
                            <span>
                            Show Password
                            </span>
                        }
                        {
                            !showPassword && 
                            <span>
                                Hide Password
                            </span>
                        }
                    </p>
                    </label>
                </span>
            </div>
            <button type='submit'>Create Account</button>
    </form>
    </div>

  )
}
