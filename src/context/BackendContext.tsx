import React, { useEffect, useState } from 'react'
import { Task } from '../types/task';
import {User} from "../types/user"

export interface BackendProps{
    getUsersFromLocalStorage: ()=> any;
    setToLocalStorage: (key: string, array: any[]) => void;
    users: User[];
    tasks: Task[];
    addUser: (user: User) => void;
    addTask: (task: Task) => void;
}


export const todoContext = React.createContext<BackendProps|undefined>(undefined);
   
const userDataFromLocalStorage = JSON.parse(localStorage.getItem("users")||"[]") as User[];
const taskDataFromLocalStorage = JSON.parse(localStorage.getItem("tasks")||"[]") as Task[];

export const BackendContextProvider = (props: React.PropsWithChildren)=>{
    const[users, setUsers] = useState<User[]>(userDataFromLocalStorage);
    const[tasks, setTasks] = useState<Task[]>(taskDataFromLocalStorage);

    const getUsersFromLocalStorage = ()=>{ 
        if(localStorage.getItem("users") !== null){
        setUsers(JSON.parse(localStorage.getItem("users") as string));
        console.log("daten wurden geladen");
        }
    }

    const addUser = (user: User)=>{
        setUsers([...users, user]);
    }

    const addTask = (task: Task)=>{
        console.log("task wird hinzugefügt");
        
        setTasks([...tasks, task]);
    }

    useEffect(()=>{
  
        localStorage.setItem("users", JSON.stringify(users));
    },[users])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("daten wurden gesendet")
    },[tasks])


    const setToLocalStorage = (key: string, array: any[] )=>{

        localStorage.setItem(key, JSON.stringify(array))
        console.log("daten wurden gesendet");
        
    }

    const deleteElementsInLocalStorage = (key: string)=>{
        let array: any[] = [];
        localStorage.setItem(key, JSON.stringify(array));
    }



    return (
        <todoContext.Provider value={{
            getUsersFromLocalStorage: getUsersFromLocalStorage,
            setToLocalStorage: setToLocalStorage,
            addUser: addUser,
            addTask: addTask,
            users: users,
            tasks: tasks
        }}>
            {props.children}
        </todoContext.Provider>
      )
}