import { IMPORTANCE } from "../views/AddTaskElement";

export interface Task{
    id: string;
    title: string;
    description: string;
    date: Date | Date[] ;
    urgency: IMPORTANCE;
    showBacklog: boolean;
    column: COLUMN
 }

 export enum COLUMN {
    TODO = "TODO",
    PROGRESS = "PROGRESS",
    TESTING = "TESTING",
    DONE = "DONE"
 }