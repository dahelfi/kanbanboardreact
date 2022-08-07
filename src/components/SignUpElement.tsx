import React, { useState } from 'react'
import {Card} from "primereact/card"
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import "../styles/login.scss"

interface Props{
    isSignedUp: () => void;
}

export const SignUpElement = (props: Props) => {
  return (
    <Card id="card" style={{display: "flex", flexDirection: "column"}}>
    <h1>Sign up</h1>
    <label htmlFor="username" >Username</label>
    <InputText className='input-field' type="text"  />
    <label htmlFor="email" >Email</label>
    <InputText className='input-field' type="password" />
    <label htmlFor="password" >Password</label>
    <InputText className='input-field' type="password" />
    <Button label="Sign up" icon="pi pi-user"  />
    <div onClick={props.isSignedUp} style={{display: "flex", justifyContent: "center", width: "100%"}}>
    <div className="add-account-button">Already signed Up</div>
    </div>
    </Card>
  )
}
