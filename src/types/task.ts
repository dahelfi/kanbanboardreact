import { IMPORTANCE } from "../components/AddTaskElement";

export interface Task{
    id: string;
    title: string;
    description: string;
    date: Date | Date[] ;
    urgency: IMPORTANCE;
 }