import React, { useState, useContext, useEffect } from 'react'
import { COLUMN, Task } from '../types/task'
import "../styles/mainPage.scss"
import { todoContext } from '../context/BackendContext'
import { BoardListElement } from './BoardListElement'


export const BoardElement = () => {
    const backend = useContext(todoContext);
    const [todoTasks, setTodoTasks] = useState<Task[]>([]);
    const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
    const [testingTasks, setTestingTasks] = useState<Task[]>([]);
    const [doneTasks, setDoneTasks] = useState<Task[]>([]);

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

  return (
    <main id="board">

    <div className="column-container">
        <h3>TO DO</h3>
        <div className="card" id="todo" >
           {todoTasks.map((task: Task)=>{
            return(
                <BoardListElement task={task}/>
            )
           })
           } 
        </div>
    </div>
    
    <div className="column-container">
        <h3>IN PROGRESS</h3>
        <div className="card" id="inProgress" ></div>
    </div>
    
    <div className="column-container">
        <h3>TESTING</h3>
        <div className="card" id="testing" ></div>
    </div>
    
    <div className="column-container">
        <h3>DONE</h3>
        <div className="card" id="done" ></div>
    </div>

</main> 
  )
}
