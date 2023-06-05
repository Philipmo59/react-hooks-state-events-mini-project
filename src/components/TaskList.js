import React from "react";
import Task from "./Task.js"

function TaskList({tasks,removeTask}) {
  const tasks_jsx = tasks.map((task)=> <Task key= {task.text} text= {task.text} category= {task.category} removeTask={removeTask}/>)
  return (
    <div className="tasks">
      {tasks_jsx}
    </div>
  );
}

export default TaskList;
