import { Card } from 'primereact/card';
import React, { useState, useContext } from 'react'
import { Task } from '../types/task'
import "../styles/backlog.scss"
import { todoContext } from '../context/BackendContext'

interface Props{
    task: Task;
    
}

export const BacklogListElement = (props: Props) => {
  const backend = useContext(todoContext);

  const bringToBoard = (task : Task)=>{
   
    let updateTask: Task ={
      id: task.id,
      title: task.title,
      description: task.description,
      date: task.date,
      urgency: task.urgency,
      showBacklog: false,
      column: task.column
    } 

    backend?.updateTask(updateTask);
  }

  return (
    <div className='backlogListElement-card-element' onClick={()=>bringToBoard(props.task)}>
      
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center", paddingLeft: "8px"}}>{props.task.title}</div>
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>{props.task.urgency}</div>
        <div style={{width: "300px", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>{new Date(props.task.date as Date).toLocaleDateString()}</div>
  
    </div>
  )
}
