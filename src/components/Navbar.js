import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { useState } from 'react';
// import {logo} from "../assets/logo192.png"
import {toast} from "react-hot-toast"

export const Navbar = ({isLoggedIn, setLogin}) => {

    // loginHandler = () => {
    //     setLogin(true);
    // }

  return (
    <div className='navbarDiv'>
        <Link to="/">
            {/* <img src={logo}></img> */}
            <h2>StudyNotion</h2>
        </Link>

        <nav className='internalNav'>
            <ul className='internalNav' style={{listStyle:'none'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact us</Link>
                </li>
            </ul>
        </nav>


        <div className='internalNav'>
            { !isLoggedIn ? 
            <Link to="/login">
                <button className="logInButton" >Log In</button>
            </Link>
             :
             <></>
            }  
            { !isLoggedIn && 
            <Link to='/signup'>
                <button className="logInButton">Signup</button>
            </Link>
            }
            { isLoggedIn && 
            <Link to='/'>
                <button className="logInButton" onClick={() => {
                    setLogin(false)
                    toast.success("You have been logged out")
                }}>Logout</button>
            </Link>
            }
            { isLoggedIn &&
            <Link to='/dashboard'>
                <button className="logInButton">Dashboard</button>
            </Link>
            }

        </div>


    </div>
  )
}
