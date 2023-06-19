import React, { useState } from "react";
import './App.css'
import ToDoList from "./ToDoList";
function App()
{
  const[inputList,setInputList]=useState('')
  const[itmes,setItmes]=useState([])
   
  const AddItems=(event)=>{
    setInputList(event.target.value)
  }
  
  const listOfItmes=()=>{
     setItmes((oldItmes)=>{
    return  [...oldItmes,inputList]
     })
     setInputList('')
  }
  const delItem=(id)=>{
    console.log("Deleted")
    setItmes((oldItmes)=>{
      return oldItmes.filter((element,index)=>{
            return index!==id
      })
    })
  }
 
  return<>
  <div className="main">
   <div className="center">
    <h1>ToDo List</h1>
      <input type="text" placeholder="Add Itmes" 
      value={inputList}
      onChange={AddItems} />
      <button onClick={listOfItmes}>+</button>
      <ol>
       {itmes.map((itmeval,index)=>{
      return  <ToDoList 
      key={index} 
      id={index}
      text={itmeval} 
      onSelect={delItem} />
         
       })}
        
      </ol>
   </div>
   </div>
  </>
}
export default App;