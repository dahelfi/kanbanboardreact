import React, { useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import todo from "../assets/todo.png"
import "../styles/login.scss"
import JoinLogoLogin from "../assets/JoinLogoLogin.png"
import { Footer } from './Footer'
import { SignInElement } from './SignInElement'
import { SignUpElement } from './SignUpElement'
import { PRIMARY_BLACK } from '../constants'

interface Props{
  logInOrLogOut: ()=>void;
}

export const Login = (props: Props) => {
    const [isSignedUp, setIsSignedUp] = useState <boolean> (true);



  return (
    <>
    
    <div style={{display: "flex", position: "absolute", justifyContent: "space-between", width: "100%", padding: "32px 64px 32px 64px"}}>
      <img src={JoinLogoLogin}/>
      <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>

        { isSignedUp ? 
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}> 
           <span style={{marginRight: "32px", fontSize: "medium", fontWeight: "bold" }}>Not a Join user?</span>
          <Button onClick={()=>setIsSignedUp(false)}  label="Sign up"  style={{backgroundColor: PRIMARY_BLACK, width: "119px"}} />

        </div> : 

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}> 
            <span style={{marginRight: "32px", fontSize: "medium", fontWeight: "bold" }}>Already logged in?</span>
            <Button onClick={()=>setIsSignedUp(true)}  label="Login"  style={{backgroundColor: PRIMARY_BLACK, width: "119px"}} />

            </div>
        }
        
      </div>

    </div>
   

    <div className='login-window'>
       
       {
           isSignedUp ? 
           <SignInElement />:
           <SignUpElement logIn={props.logInOrLogOut} isSignedUp={()=>setIsSignedUp(true)}/>
       }





    </div>
    </>


  )
}
