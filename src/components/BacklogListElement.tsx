import { Card } from 'primereact/card';
import React from 'react'
import { Task } from '../types/task'
import "../styles/backlog.scss"

interface Props{
    task: Task;
}

export const BacklogListElement = (props: Props) => {


  return (
    <div className='backlogListElement-card-element'>
      
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center", paddingLeft: "8px"}}>{props.task.title}</div>
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>{props.task.urgency}</div>
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>{new Date(props.task.date as Date).toLocaleDateString()}</div>
  
    </div>
  )
}
