import React, { useState, useContext, useEffect } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"
import { todoContext } from '../context/BackendContext'
import {generateHash} from '../services/hash';
import {User} from "../types/user"
import {useNavigate} from "react-router-dom"

interface Props{
    isSignedUp: () => void;
    logIn: () => any;
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
    props.logIn();
    navigate("/board")

    backend?.addUser(user);
   
  }

 

  return (
    <Card id="card" style={{display: "flex", flexDirection: "column"}}>
    <h1>Sign up</h1>
    <label  >Username</label>
    <InputText onChange={(e:any)=>setUserName(e.target.value)} className='input-field' type="text"  />
    <label  >Email</label>
    <InputText onChange={(e:any)=>setUserEmail(e.target.value)} className='input-field' type="text" />
    <label  >Password</label>
    <InputText onChange={(e:any)=>setPassword(e.target.value)} className='input-field' type="password" />
    <Button onClick={createUser} label="Sign up" icon="pi pi-user"  />
    <div onClick={props.isSignedUp} style={{display: "flex", justifyContent: "center", width: "100%"}}>
    <div className="add-account-button">Already signed Up</div>
    </div>
    </Card>
  )
}
