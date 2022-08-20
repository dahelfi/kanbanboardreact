import React, { useState, useContext } from 'react'
import "../styles/addTask.scss"
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { COLUMN, Task } from '../types/task'
import { generateHash } from '../services/hash'
import { todoContext } from '../context/BackendContext'

export enum IMPORTANCE {
    "SEHR WICHTIG",
    "WICHTIG",
    "NEUTRAL",
    "UNWICHTIG"
}

export const AddTaskElement = () => {
    const backend = useContext(todoContext);
    const [importance, setImportance] = useState<IMPORTANCE>(IMPORTANCE.NEUTRAL);
    const [importanceArray, setImportanceArray] = useState<any[]>(
        [{label: "SEHR WICHTIG", value: IMPORTANCE['SEHR WICHTIG']},
        {label: "WICHTIG", value: IMPORTANCE.WICHTIG},
        {label: "NEUTRAL", value: IMPORTANCE.NEUTRAL},
        {label: "UNWICHTIG", value: IMPORTANCE.UNWICHTIG},
        ]
    )
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [date, setDate] = useState<Date| Date[] |undefined>(undefined);

    const createTask = ()=>{
        if(date && taskTitle !== "" && taskDescription !== ""){
            let task: Task={
                id: generateHash(8),
                title: taskTitle,
                description: taskDescription,
                date: date,
                urgency: importance,
                showBacklog: true,
                column: COLUMN.TODO
               }

               backend?.addTask(task);
        }else{
            alert('Bitte fülle alle Felder mit validen Werten aus');
        }
    }

    const cancelTask = ()=>{
        setTaskTitle("");
        setImportance(IMPORTANCE.NEUTRAL);
        setDate(undefined);
        setTaskDescription("");
    }

  return (
    <Card className='card-element'>
        <div className='p-card-title headline'>
            <h1>Aufgabe hinzufügen</h1>
        </div>

        <form >
            <div className="taskBoxContent">

            <div className="inputField">
            <label className="form-label">Title</label>
            <InputText onChange={(e:any)=>{setTaskTitle(e.target.value); e.stopPropagation()}}id="title" className="input-text" required/>
            </div>

            <div className="inputField">
            <label className="form-label">Beschreibung</label>
            <InputTextarea onChange={(e:any)=>{setTaskDescription(e.target.value); e.stopPropagation()}} className="input-textarea" placeholder="Leave a comment here"
                    id="description" required/>
            </div>
        </div>

        <div className="taskBoxContent">
        <div className="inputField">
            <label className="form-label">Fälligkeitsdatum</label>
            <Calendar className='calendar' placeholder='tt.mm.jjjj' value={date} onChange={(e) => setDate(e.value)} showIcon dateFormat="dd-mm-yy" />
        </div>
        <div className="inputField">
            <label  className="form-label">Wichtigkeit</label>
            <div className="dropdown">
            <Dropdown style={{width: "100%"}} placeholder='Wichtigkeit' onChange={(e)=>setImportance(e.value)} value={importance} options={importanceArray}/>
      
            </div>
        </div>
        <div className="task-buttons">
                <Button onClick={cancelTask} className="p-button-raised cancel-button">Abbrechen</Button>
                <Button onClick={createTask} className="p-button-raised createTask-button">Aufgabe
                    erstellen</Button>
        </div>
    </div>
    </form>
</Card>
  )
}
