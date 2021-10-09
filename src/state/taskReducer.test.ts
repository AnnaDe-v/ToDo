import {
    todolistReducer,
    changeTodolistTitleAC,
    changeTodolistFilterAC,
    addTodolistAC
} from './todolistReducer';
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../AppWithRedux';
import {TasksStateType} from "../AppWithRedux";
import {removeTaskAC, taskReducer} from "./taskReducer";

test('correct task should be removed', () => {

    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true}
        ],
        'todolistId2': [
            {id: '1', title: "Milk", isDone: true},
            {id: '2', title: "React Book", isDone: true}
        ]
    }

    const action = removeTaskAC('2', 'todolistId2')
    const endState = taskReducer(startState, action)

    expect(endState.length).toBe(1);
});


