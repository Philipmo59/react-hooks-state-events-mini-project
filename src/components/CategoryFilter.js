import React, { useState } from "react";

function CategoryFilter({listOfCategorys,setCategory}) {
  const [clicked, setClicked] = useState('')

  function onSelected(event){
    const selectedFilter = event.target.textContent
    setCategory(selectedFilter)
    setClicked(selectedFilter)
    
  }
  const categories_jsx = listOfCategorys.map((category)=>
  <button className = {clicked === category?"selected":""} key = {category} onClick = {onSelected}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories_jsx}
    </div>
  );
}

export default CategoryFilter;
