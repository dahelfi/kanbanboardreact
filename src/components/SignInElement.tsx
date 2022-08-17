import React, { useContext, useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"
import {useNavigate} from "react-router-dom"
import { todoContext } from '../context/BackendContext'

interface Props{
    isNotSignedUp: () => void;
    logIn: () => any;
}

export const SignInElement = (props: Props) => {
  const backend = useContext(todoContext)
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const logIn = () => {

    if(checkAllInputFields() && backend){ 
        if(checkCredentials(backend?.users)){
          props.logIn();
          navigate("/board")
        }else{
          alert('Password or Username are incorrect try again');
        };
      }
    }
  
    /**
     * this methods checks if all inputfields are filled in
     * @returns 
     */
    const checkAllInputFields= ()=>{
      return userName !=='' || password !=='';
    }
    
  
    /**
     * this method checks if one user has the same credentials which were typed in
     * @param testArray 
     * @returns 
     */
    const checkCredentials = (array:any[]) =>{
      for (let i = 0; i < array.length; i++) {      
        if(array[i].password === password &&
          array[i].username === userName){
            return true;
        }
      }
      return false;
    }
  

  return (
    <Card id="card" style={{display: "flex", flexDirection: "column"}}>
    <h1>Sign In</h1>
    <label htmlFor="email" >Username</label>
    <InputText onChange={(e:any)=>setUserName(e.target.value)} className='input-field' type="text"  />
    <label htmlFor="password" >Password</label>
    <InputText onChange={(e:any)=>setPassword(e.target.value)} className='input-field' type="password" />
    <Button onClick={logIn} label="Sign In" icon="pi pi-user"  />
    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
    <div onClick={props.isNotSignedUp} className="add-account-button">Create new account</div>
    </div>
    </Card>
  )
}
