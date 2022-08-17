import React, { useState } from 'react'
import { PRIMARY } from '../constants';
import "../styles/tabelements.scss";

interface Props{
    selected: boolean;
    name: string;
    id: string;
    onChangeDialog(id: string): void; 
}

export const Tabelement = (props: Props) => {
    const [hover, setHover] = useState<boolean>(false);

    const testFunction = () =>{
        props.onChangeDialog(props.id)
    }
    
    const styles ={
        backgroundColor: props.selected||hover ? "rgba(175, 175, 175, 0.4)": PRIMARY,
        borderLeft: props.selected ? "2px solid white": ""
    }


  return (
    <div id="tabelement" onClick={testFunction} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={styles}>{props.name}</div>
  )
}
