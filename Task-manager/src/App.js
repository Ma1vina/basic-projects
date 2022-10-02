import React from "react"
import TaskList from "./task/TaskList";
import Context from "./context"
import AddTask from "./task/AddTask";

function App() {
const [tasks, setTasks] = React.useState([
  {id: 1, completed: false, title: "Решить задачу..."},
  {id: 2, completed: false, title: "Запланировать встречу..."},
  {id: 3, completed: false, title: "Организовать..."},
])
 
function toggleTask(id){
setTasks(
  tasks.map(task =>{
  if(task.id === id){
    task.completed = !task.completed
  }
  return task
}))
  
}

function removeTask(id){
  setTasks(tasks.filter(task => task.id!==id))
}

function addTask(title){
  setTasks(tasks.concat([{
    title,
    id: Date.now(),
    completed:false
  }]))
}


  return (
    <Context.Provider value={{removeTask}}>
   <div className="styleWrap">
   <h1>Task-manager</h1>
 <AddTask onCreate={addTask}/>
 {tasks.length? <TaskList tasks={tasks} onToggle={toggleTask} /> : <p style={{marginLeft:"150px"}}>Нет заданий!</p>}
   </div>
   </Context.Provider>
  );
}

export default App;
