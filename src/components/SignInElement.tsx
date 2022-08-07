import React, { useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"

interface Props{
    isNotSignedUp: () => void;
}

export const SignInElement = (props: Props) => {
  return (
    <Card id="card" style={{display: "flex", flexDirection: "column"}}>
    <h1>Sign In</h1>
    <label htmlFor="email" >Email</label>
    <InputText className='input-field' type="text"  />
    <label htmlFor="password" >Password</label>
    <InputText className='input-field' type="password" />
    <Button label="Sign In" icon="pi pi-user"  />
    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
    <div onClick={props.isNotSignedUp} className="add-account-button">Create new account</div>
    </div>
    </Card>
  )
}
