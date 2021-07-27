import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = { id: string, title: string, filter: FilterValuesType };

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistsID: string, id: string) {
        let currentTask = tasks[todolistsID];
        if (currentTask) {
            tasks[todolistsID] = currentTask.filter(t => t.id !== id);
            setTasks({...tasks})
        }
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistsID: string, title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistsID: string, taskId: string, isDone: boolean) {
        let task = tasks[todolistsID].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }


    function changeFilter(todolistsID: string, value: FilterValuesType) {
        let currentTodolist = todolists.find(tdF => tdF.id === todolistsID);
        if (currentTodolist) {
            currentTodolist.filter = value
            setTodolists([...todolists])
        }
        // setFilter(value);
    }

    function removeToDoList(todolistsID: string) {
        setTodolists (todolists.filter(td => td.id !== todolistsID))
        const copy = {...tasks}
        delete copy[todolistsID]
        setTasks(copy)
    }

    return (
        <div className="App">
            {todolists.map((tdM) => {
                let tasksForTodolist = tasks[tdM.id];
                if (tdM.filter === "active") {
                    tasksForTodolist = tasks[tdM.id].filter(t => t.isDone === false);
                }
                if (tdM.filter === "completed") {
                    tasksForTodolist = tasks[tdM.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={tdM.id}
                        todolistsID={tdM.id}
                        title={tdM.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tdM.filter}
                        removeToDoList={removeToDoList}
                    />
                )
            })}

        </div>
    );
}

export default App;


//--------------------------------------------------------------------------------
// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
// type todolistsType={id:string,title:string,filter:FilterValuesType};
//
// function App() {
//
//     let[todolists,setTodolists]=useState<Array<todolistsType>>([
//         {id:v1(),title:'What to learn',filter:'all'},
//         {id:v1(),title:'What to buy',filter:'all'},
//     ])
//
//
//     let [tasks, setTasks] = useState([
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true},
//             {id: v1(), title: "ReactJS", isDone: false},
//             {id: v1(), title: "Rest API", isDone: false},
//             {id: v1(), title: "GraphQL", isDone: false},
//         ],
//     );
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     function removeTask(id: string) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//     function addTask(title: string) {
//         let task = {id: v1(), title: title, isDone: false};
//         let newTasks = [task, ...tasks];
//         setTasks(newTasks);
//     }
//     function changeStatus(taskId: string, isDone: boolean) {
//         let task = tasks.find(t => t.id === taskId);
//         if (task) {
//             task.isDone = isDone;
//         }
//
//         setTasks([...tasks]);
//     }
//
//     let tasksForTodolist = tasks;
//
//     if (filter === "active") {
//         tasksForTodolist = tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//
//     return (
//         <div className="App">
//             <Todolist title="What to learn"
//                       tasks={tasksForTodolist}
//                       removeTask={removeTask}
//                       changeFilter={changeFilter}
//                       addTask={addTask}
//                       changeTaskStatus={changeStatus}
//                       filter={filter}
//             />
//         </div>
//     );
// }
//
// export default App;
