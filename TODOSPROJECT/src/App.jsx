import React, { useState } from 'react'

const App = () => {
  const[name,setName]=useState("");
  const[description,setDescription]=useState("");
  const[todos,setTodos]=useState(JSON.parse( localStorage.getItem("todos"))||[]);

function todosHandler(){
  // setTodos([...todos,{name,description,id:new Date().getTime()}]);
  setTodos((prevTodos)=>{
    localStorage.setItem("todos",JSON.stringify([...prevTodos,{name,description,id:new Date().getTime()}]))
    return [...prevTodos,{name,description,id:new Date().getTime()}];
  });


 
  setName();
  setDescription();


}

  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} 
      type="text" 
      placeholder="Enter Task Name" 
      value={name}/>

      <input onChange={(e)=>setDescription(e.target.value)} 
      type="text" 
      placeholder="Enter Description Name" 
      value={description}/>

      <button onClick={todosHandler}>Add Task</button>

      <ul className="taskList">{
        todos.map(t=>{
          return <li key={t.id}>{t.name}-{t.description}</li>
        })}

      </ul>
    </div>
  )
}

export default App