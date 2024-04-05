
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value,setvalue]=useState(" ")
  const [todo,setTodo]=useState([])
  function handleAddtodo(){
     setTodo([...todo,{text:value}])
  }
  function handleRemove(id){
    let removelist=todo.filter((item,index)=>index!=id)
    setTodo(removelist)
  }
  return (
    <div>
    <div>To-Do-List</div>
        <input type="text" onChange={(e)=>setvalue(e.target.value)} value={value}/>
        <button onClick={handleAddtodo}>Add Todo</button>
        <ul>
          {todo.length> 0 && todo.map((item,index)=>(
            <div>
              <li>{item.text}</li>
              <button onClick={()=>handleRemove(index)}>Delete</button>
            </div>
          ))}
        </ul>
    </div>
  )
}

export default App
