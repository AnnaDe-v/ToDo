import { v1 } from "uuid";
import {FilterValuesType, TasksStateType, TodolistType} from "../AppWithRedux";
import {todolistId1, todolistId2} from "./todolistReducer";


export type mainType = removeTaskACType | addTaskACType | changeTaskTitleACType | changeTaskStatusACType

const initialState: TasksStateType = {
    [todolistId1]: [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true}
],
    [todolistId2]: [
    {id: v1(), title: "Milk", isDone: true},
    {id: v1(), title: "React Book", isDone: true}
]
}

export const taskReducer = (state: TasksStateType = initialState, action: mainType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(t => t.id !== action.id);
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        case 'CHANGE-TASK-STATUS': {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            stateCopy[action.todolistId] = tasks.map(t => t.id === action.id ? {...t, isDone: action.isDone} : t)
            return stateCopy
        }
        case 'CHANGE-TASK-TITLE': {
            const stateCopy = {...state}
            const tasks = state[action.id]
            let task = tasks.find(t => t.id === action.id)
            if(task) {
                task.title = action.title
            }
            return stateCopy
        }
        default:
            return state
    }
}



export type removeTaskACType = {
    type: 'REMOVE-TASK'
    id: string
    todolistId: string
}
export const removeTaskAC = (id: string, todolistId: string): removeTaskACType => {
    return {type: 'REMOVE-TASK', id, todolistId} as const
}


export type addTaskACType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
export const addTaskAC = (title: string, todolistId: string): addTaskACType => {
    return {type: 'ADD-TASK', title, todolistId}
}


export type changeTaskTitleACType = {
    type: 'CHANGE-TASK-TITLE'
    id: string
    title: string
}
export const changeTaskTitleAC = (id: string, title: string, s: string): changeTaskTitleACType => {
    return {type: 'CHANGE-TASK-TITLE',id, title} as const
}

export type changeTaskStatusACType = {
    type: 'CHANGE-TASK-STATUS',
    id: string
    isDone: boolean
    todolistId: string
}
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): changeTaskStatusACType => {
    return {type: 'CHANGE-TASK-STATUS', id, isDone, todolistId}
}