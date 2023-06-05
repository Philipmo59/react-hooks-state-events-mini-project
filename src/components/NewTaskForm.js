import React from "react";

function NewTaskForm({listOfCategorys,onTaskFormSubmit}) {
  let options = listOfCategorys.filter((subject)=> subject !== "All"? true:false).map(((subject)=> <option>{subject}</option>))


  function submitHandler(event){
    event.preventDefault()
    let text = event.target.elements.text.value 
    let category = event.target.category.value
    let key = text
    let newTask= {
      text,
      category,
      key
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
