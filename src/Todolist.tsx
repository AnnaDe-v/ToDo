import React, {ChangeEvent} from 'react';
import AppWithRedux, {FilterValuesType} from './AppWithRedux';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/taskReducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    const dispatch = useDispatch()


    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id))
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);




    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>

        <AddItemForm addItem={ addTask } />

        <div>
            {
                props.tasks.map(t => {
                        const onClickHandler = () => dispatch(removeTaskAC(t.id, props.id));
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            dispatch(changeTaskStatusAC(t.id, newIsDoneValue, props.id))
                        };
                        const onTitleChangeHandler = (newValue: string) => {
                            dispatch(changeTaskTitleAC(t.id, newValue, props.id))
                        };

                        return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                checked={t.isDone}
                                color="primary"
                                onChange={onChangeHandler}
                            />
                            <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
                            <IconButton onClick={onClickHandler}>
                                <Delete/>
                            </IconButton>
                        </div>
                    }
                )
            }
        </div>
        <div style={{ paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}


