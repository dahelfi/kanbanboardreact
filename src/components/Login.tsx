import React, { useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import todo from "../assets/todo.png"
import "../styles/login.scss"
import { Footer } from './Footer'
import { SignInElement } from './SignInElement'
import { SignUpElement } from './SignUpElement'

interface Props{
  logInOrLogOut: ()=>void;
}

export const Login = (props: Props) => {
    const [isSignedUp, setIsSignedUp] = useState <boolean> (true);

  return (
    <div className='login-window'>
        <img src={todo}/>
        {
            isSignedUp ? 
            <SignInElement logIn={props.logInOrLogOut} isNotSignedUp={()=>setIsSignedUp(false)}/>:
            <SignUpElement logIn={props.logInOrLogOut} isSignedUp={()=>setIsSignedUp(true)}/>
        }

    <Footer/>

    </div>

  )
}
