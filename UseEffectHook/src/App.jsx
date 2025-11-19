
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count,SetCount]=useState(0);
  const[Total,SetTotal]=useState(1);
  // variation 1
  // runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  // variation 2
  // runs only on first render
  // useEffect(()=>{
  //   alert("I will run only on first render")

  //  },[])

  //  variation 3
  // useEffect(()=>{
    // alert("I will run every time when the count is updated")

  // },[count])

  // variation 4
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // },[count,Total])

  // variation 5
  useEffect(() => {
   alert("Count is Updated")
  
    return () => {
     alert("count is unmounted from UI")
    }
  }, [count])
  
  

  function handleclick(){
    SetCount(count+1);
  }
  function handleclickTotal(){
    SetTotal(Total+1);
  }
  
  return (
    <>
    <div>
    <button onClick={handleclick}>
  update Count
    </button>
    <p>
     Count is:{count}
    </p>
    <br />
   
   <button onClick={handleclickTotal}>
    update total
    </button>
    <p>
     Total is:{Total}
    </p>
 
    </div>
       
    </>
  )
}

export default App
