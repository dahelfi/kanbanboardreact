import { useState}from 'react'
import "../styles/header.scss"
import { Tabelement } from './Tabelement'
import appLogo from "../assets/logo.png"
import { Button } from 'primereact/button'
import { TabelementType } from '../types/tabelement'

interface Props{
    tabElements: TabelementType[];
    onChangeElement: (id: string) => void;
    activeTab: string;
}

export const Header = (props: Props) => {
  


  const testFunction = (id: string)=>{
   props.onChangeElement(id);
  }
 
  return (
  <header>
    <img src={appLogo}/>
    {props.tabElements.map((element: TabelementType)=>{
        return( 
            <Tabelement onChangeDialog={testFunction} selected={props.activeTab === element.id} name={element.name} id={element.id}/>
        )
    })}
    <div style={{display: "flex", width: "100%", height: "60%", justifyContent: "center", alignItems: "flex-end"}}>
    <Button className="button-logout" icon="pi pi-user"/>
    </div>
  </header>
  )
}
