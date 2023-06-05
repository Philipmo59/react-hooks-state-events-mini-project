import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks,setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  const filteredTasks = tasks.filter(task=> category === "All"? true: task.category === category)

  function removeTask(deletedText){
    setTasks(tasks.filter((task)=> task.text !== deletedText))
  }

  function onTaskFormSubmit(addedTask){
    let newList = [...tasks,addedTask]
    console.log(newList)
    setTasks(newList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter listOfCategorys={CATEGORIES} setCategory = {setCategory}/>
      <NewTaskForm listOfCategorys={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
