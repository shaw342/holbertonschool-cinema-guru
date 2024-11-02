import React, { useState } from "react";
import "./auth.css"
import axios from "axios";

export default function Authentication({setIsLoggedIn,setUserUsername}) {
    const [_switch,setSwitch] = useState(true)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handlClickSigin = () => {
        setSwitch(true)
    }

    const handlClickSignup = () => {
        setSwitch(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = _switch ? "/api/auth/login" : "/api/auth/register"
            const response = await axios.post(url,{username,password})
            const {accessToken} = response.data 
            localStorage.setItem(accessToken)
            setUserUsername(username)
            setIsLoggedIn(true)
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
            <div className="button">
                <button className={_switch ? "active": "inactive"} onClick={handlClickSigin}>
                    Sign In 
                </button>
                <button className={_switch ? "active": "inactive"} onClick={handlClickSignup}>
                    Sign Up
                </button>

                {_switch ? (
                <div className='title'>
                    <h2>Sign in with your account</h2>
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign In"
                        handleSubmit={handleSubmit}
                    />
                </div>
            ):(
                <div className='title'>
                    <h2>Create a new account</h2>
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        buttonLabel="Sign Up"
                        handleSubmit={handleSubmit}
                    />
                </div>

            )}
            </div>
        </div>
    )
}