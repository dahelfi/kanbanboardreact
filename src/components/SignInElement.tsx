import React, { useContext, useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"
import {useNavigate} from "react-router-dom"
import { todoContext } from '../context/BackendContext'
import { PRIMARY_BLACK } from '../constants'

interface Props{
    isNotSignedUp?: () => void;
    logIn?: () => any;
}

export const SignInElement = (props: Props) => {
  const backend = useContext(todoContext)
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const logIn = () => {

    if(checkAllInputFields() && backend){ 
        if(checkCredentials(backend?.users)){
          //props.logIn();
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
    <Card id="card" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
  
        

        <div style={{display: "flex", justifyContent: "center"}}>

        <div style={{borderBottom: "2px solid #29ABE2", width: "150px", marginBottom: "32px", display: "flex", justifyContent: "center"}}>
        <h1>Login</h1>
        </div>
        </div>
     
     
   
    <span className="p-input-icon-right">
                    <i className="pi pi-user" />
                    <InputText style={{width: "100%"}} placeholder='username' value={userName} onChange={(e:any)=>setUserName(e.target.value)} />
    </span>
    
    <span className="p-input-icon-right">
                    <i className="pi pi-lock" />
                    <InputText type={"password"} style={{width: "100%"}} placeholder='password' value={password} onChange={(e:any)=>setPassword(e.target.value)} />
    </span>
    <Button onClick={logIn} label="Sign In"  style={{backgroundColor: PRIMARY_BLACK, width: "70%"}} />
    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
    <div  className="add-account-button">Forgot my password</div>
    </div>
   
    </Card>
  )
}
