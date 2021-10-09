import { v1 } from "uuid";
import AppWithRedux, { FilterValuesType, TodolistType } from "../AppWithRedux";


export type TsarType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

export const todolistId1 = v1();
export const todolistId2 = v1();

const initialState: TodolistType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]

export const todolistReducer = (state: TodolistType[] = initialState, action: TsarType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tdl => tdl.id!== action.id)
        }
        case 'ADD-TODOLIST': {
            return [...state, {id: v1(), title: action.title, filter: 'all'}]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(tdl => tdl.id === action.id ? {...tdl, title: action.title} : tdl)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tdl => tdl.id === action.todolistId ? {...tdl, filter: action.value} : tdl)
        }
        default:
            return state
    }
}

export type removeTodolistACType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export const removeTodolistAC = (id: string): removeTodolistACType => {
    return {type: 'REMOVE-TODOLIST', id} as const
}


export type addTodolistACType = {
    type: 'ADD-TODOLIST'
    title: string
}
export const addTodolistAC = (title: string): addTodolistACType => {
    return {type: 'ADD-TODOLIST', title} as const
}


export type changeTodolistTitleACType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export const changeTodolistTitleAC = (id: string,  title: string): changeTodolistTitleACType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title} as const
}


type changeTodolistFilterACType = {
    type: 'CHANGE-TODOLIST-FILTER'
    value: FilterValuesType
    todolistId: string
}
export const changeTodolistFilterAC = (value: FilterValuesType, todolistId: string): changeTodolistFilterACType => {
    return {type: 'CHANGE-TODOLIST-FILTER', value, todolistId} as const
}