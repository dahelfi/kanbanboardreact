import React, { useEffect, useState } from 'react'
import {User} from "../types/user"

export interface BackendProps{
    getUsersFromLocalStorage: ()=> any;
    setToLocalStorage: (key: string, array: any[]) => void;
    users: User[];
    addUser: (user: User) => void;
}


export const todoContext = React.createContext<BackendProps|undefined>(undefined);
   


export const BackendContextProvider = (props: React.PropsWithChildren)=>{
    const[users, setUsers] = useState<User[]>([]);

    useEffect(()=>{

    })

    const getUsersFromLocalStorage = ()=>{ 
        if(localStorage.getItem("users") !== null){
        setUsers(JSON.parse(localStorage.getItem("users") as string));
        console.log("daten wurden geladen");
        }
    }

    const addUser = (user: User)=>{
        setUsers([...users, user]);
        setToLocalStorage("users", users);
    }


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
            users: users
        }}>
            {props.children}
        </todoContext.Provider>
      )
}