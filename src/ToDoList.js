import React from "react";

function ToDoList(props)
{
   
    return (
        <>
        <div className="mainstyle">
        <i className="fa fa-times" aria-hidden='true'
         onClick={()=>{
            props.onSelect(props.id)
         }} ></i>
      <li>{props.text}</li>
      </div>
      </>
      )
}
export default ToDoList;
