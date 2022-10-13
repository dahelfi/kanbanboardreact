import React, { useState, useContext, useEffect } from 'react'
import { COLUMN, Task } from '../types/task'
import "../styles/mainPage.scss"
import { todoContext } from '../context/BackendContext'
import { BoardListElement } from '../components/BoardListElement'


export const BoardElement = () => {
    const backend = useContext(todoContext);
    const [todoTasks, setTodoTasks] = useState<Task[]>([]);
    const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
    const [testingTasks, setTestingTasks] = useState<Task[]>([]);
    const [doneTasks, setDoneTasks] = useState<Task[]>([]);
    const [currentTask, setCurrentTask] = useState<Task>();

    useEffect(()=>{

        filterAllTasks();
    },[backend?.tasks])
 
    const filterAllTasks = () =>{
        if(backend){
            let todoTasks: Task[] = backend?.tasks.filter(task => task.column == COLUMN.TODO);
            let inProgressTasks: Task[] = backend?.tasks.filter(task => task.column == COLUMN.PROGRESS);
            let testingTasks: Task[] = backend?.tasks.filter(task => task.column == COLUMN.TESTING);
            let doneTasks: Task[] = backend?.tasks.filter(task => task.column == COLUMN.DONE);
            console.log("hier die todotasks: ",todoTasks);
            
            
            setTodoTasks([...todoTasks]);
            setInProgressTasks([...inProgressTasks]);
            setTestingTasks([...testingTasks]);
            setDoneTasks([...doneTasks]);
        }
       
    }

    const allowDrop = (event: any)=>{
        event.preventDefault();
    }

    const moveTo = (column : COLUMN) =>{

        if(currentTask !== undefined){
            let updateTask :Task = {
                id: currentTask?.id,
                title: currentTask?.title,
                description: currentTask?.description,
                date: currentTask?.date,
                urgency: currentTask?.urgency,
                showBacklog: currentTask?.showBacklog,
                column: column
            }
            backend?.updateTask(updateTask);
        }
        
    }


  return (
    <main id="board">

    <div className="column-container">
        <h3>TO DO</h3>
        <div className="card" id="todo" onDrop={()=>moveTo(COLUMN.TODO)} onDragOver={(event:any)=>allowDrop(event)}>
           {todoTasks.map((task: Task)=>{
            return(
                <BoardListElement dragElement={()=>setCurrentTask(task)}  task={task}/>
            )
           })
           } 
        </div>
    </div>
    
    <div className="column-container">
        <h3>IN PROGRESS</h3>
        <div className="card" onDrop={()=>moveTo(COLUMN.PROGRESS)} onDragOver={(event:any)=>allowDrop(event)} id="inProgress" >
           {inProgressTasks.map((task: Task)=>{
            return(
                <BoardListElement dragElement={()=>setCurrentTask(task)}  task={task}/>
            )
           })
           } 

        </div>
    </div>
    
    <div className="column-container">
        <h3>TESTING</h3>
        <div className="card" onDrop={()=>moveTo(COLUMN.TESTING)} onDragOver={(event:any)=>allowDrop(event)} id="inProgress" >
           {testingTasks.map((task: Task)=>{
            return(
                <BoardListElement dragElement={()=>setCurrentTask(task)}  task={task}/>
            )
           })
           } 

        </div>
    </div>
    
    <div className="column-container">
        <h3>DONE</h3>
        <div className="card" onDrop={()=>moveTo(COLUMN.DONE)} onDragOver={(event:any)=>allowDrop(event)} id="inProgress" >
           {doneTasks.map((task: Task)=>{
            return(
                <BoardListElement dragElement={()=>setCurrentTask(task)}  task={task}/>
            )
           })
           } 

        </div>
    </div>

</main> 
  )
}
