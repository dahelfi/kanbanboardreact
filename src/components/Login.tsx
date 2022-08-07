import React, { useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import todo from "../assets/todo.png"
import "../styles/login.scss"
import { Footer } from './Footer'
import { SignInElement } from './SignInElement'
import { SignUpElement } from './SignUpElement'


export const Login = () => {
    const [isSignedUp, setIsSignedUp] = useState <boolean> (true);

  return (
    <div className='login-window'>
        <img src={todo}/>
        {
            isSignedUp ? 
            <SignInElement isNotSignedUp={()=>setIsSignedUp(false)}/>:
            <SignUpElement isSignedUp={()=>setIsSignedUp(true)}/>
        }

    <Footer/>

    </div>

  )
}
