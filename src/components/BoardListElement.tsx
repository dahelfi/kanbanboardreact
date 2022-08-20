import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React from 'react'
import { COLUMN, Task } from '../types/task'
import "../styles/board.scss"


interface Props{
    task: Task;
}

export const BoardListElement = (props: Props) => {
    if(!props.task.showBacklog){
        return (
            <Card style={{marginTop: "1rem", width: "90%"}}>

            <div className="card-header">
                <div>
                    <Button className="button-icon-edit" style={{margin: "1rem"}} icon="pi pi-pencil"/>
                    <Button className="button-icon-delete"  style={{margin: "1rem"}}  icon="pi pi-trash"/>  
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{props.task.title}</h5>
                <p className="card-text">{props.task.description.replaceAll('\n','</br>')}</p>
                
            </div>
            <div className="card-footer">
                <small>    <i><>Ende am: {new Date(props.task.date as Date).toLocaleDateString()}</></i> </small>
                <small>    <i>{props.task.urgency}</i> </small>
            </div>
            </Card>
          )
    }else{
        return null;
    }
 
}
