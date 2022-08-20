import React, { useState, useContext } from 'react'
import { Card } from 'primereact/card'
import "../styles/backlog.scss"
import { todoContext } from '../context/BackendContext'
import { BacklogListElement } from './BacklogListElement'

export const BacklogElement = () => {
  const backend = useContext(todoContext);



  return (
    <Card className='card-element'>
       <div className='p-card-title headline'>
            <h1>Backlog</h1>
        </div>
        <div className="backlog-content">
          <div className='backlog-headline'>
            <div className='title'>
            <h3>Titel</h3>
            </div>
            <div className='urgency'>
            <h3>Wichtigkeit</h3>
            </div>
            <div className='date'>
            <h3>Datum</h3>
            </div>
          </div>

          {
            backend?.tasks.map((element)=>{
              if(element.showBacklog){
                return(
                  <BacklogListElement  task={element}/>
                )
              }else{
                return null;
              }
              
            })
          }

        </div>


    </Card>

  )
}
