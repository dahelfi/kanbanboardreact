import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { COLUMN, Task } from '../types/task'
import "../styles/board.scss"
import React, { useState, useContext } from 'react'
import { todoContext } from '../context/BackendContext'


interface Props{
    task: Task;
    dragElement: (task : Task) => any;
}

export const BoardListElement = (props: Props) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const backend = useContext(todoContext);

    const deleteElement= (task: Task) =>{
        console.log("gelöscht");
        
        backend?.deleteTask(task);
      }

      const headerContent = 
      hovering ?  <div>
      <Button className="button-icon-edit" style={{margin: "1rem"}} icon="pi pi-pencil"/>
      <Button onClick={()=>deleteElement(props.task)} className="button-icon-delete"  style={{margin: "1rem"}}  icon="pi pi-trash"/>  
        </div> : null;

        const footerContent = hovering ? 
            <> <small>    <i><>Ende am: {new Date(props.task.date as Date).toLocaleDateString()}</></i> </small>
        <small> <i>{props.task.urgency}</i> </small></> : null;

    if(!props.task.showBacklog){
        return (
            <Card style={{marginTop: "1rem", width: "90%"}} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} draggable="true" onDragStart={()=>props.dragElement(props.task)}>
       
            <div className="card-header">
             {headerContent}
            </div>  
            <div className="card-body">
                <h5 className="card-title text-center">{props.task.title}</h5>
                <p className="card-text">{props.task.description.replaceAll('\n','</br>')}</p>
                
            </div>
            <div className="card-footer">
                {footerContent}
            </div>
            </Card>
          )
    }else{
        return null;
    }
 
}
