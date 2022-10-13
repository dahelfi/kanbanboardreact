import React, { useState, useContext, useEffect } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"
import { todoContext } from '../context/BackendContext'
import {generateHash} from '../services/hash';
import {User} from "../types/user"
import {useNavigate} from "react-router-dom"
import { PRIMARY_BLACK } from '../constants'

interface Props{
    isSignedUp?: () => void;
    logIn?: () => any;
}

export const SignUpElement = (props: Props) => {
  const backend = useContext(todoContext);
  let navigate = useNavigate();
  const[users, setUsers] = useState<User[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  
  const createUser = () =>{
    let user: User={
      id: generateHash(10),
      username: userName,
      email: userEmail,
      password: password
    }
    backend?.addUser(user);
    //props.logIn();
    navigate("/board")

    backend?.addUser(user);
   
  }

 

  return (
    <Card id="card" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
  
        

        <div style={{display: "flex", justifyContent: "center"}}>

        <div style={{borderBottom: "2px solid #29ABE2", width: "150px", marginBottom: "32px", display: "flex", justifyContent: "center"}}>
        <h1>Sign Up</h1>
        </div>
        </div>
     
     
   
    <span className="p-input-icon-right">
                    <i className="pi pi-user" />
                    <InputText style={{width: "100%"}} placeholder='username' value={userName} onChange={(e:any)=>setUserName(e.target.value)} />
    </span>
    <span className="p-input-icon-right">
                    <i className="pi pi-user" />
                    <InputText style={{width: "100%"}} placeholder='email' value={userEmail} onChange={(e:any)=>setUserEmail(e.target.value)} />
    </span>
    
    <span className="p-input-icon-right">
                    <i className="pi pi-lock" />
                    <InputText type={"password"} style={{width: "100%"}} placeholder='password' value={password} onChange={(e:any)=>setPassword(e.target.value)} />
    </span>
    <Button  label="Sign In"  style={{backgroundColor: PRIMARY_BLACK, width: "70%"}} />

   
    </Card>
  )
}
