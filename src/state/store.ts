import {combineReducers, createStore} from 'redux';
import {taskReducer} from "./taskReducer";
import {todolistReducer} from "./todolistReducer";
import {TodolistType} from "../AppWithRedux";

// type AppRootStateType = {
//     todolists: Array<TodolistType>
//     tasks: TodolistType
// }

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
        todolists: todolistReducer,
        tasks: taskReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store