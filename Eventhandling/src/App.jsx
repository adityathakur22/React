import React from 'react'

const App = () => {
  // function handleclick(){
  //   alert("you have clicked");
  // }
  // function handlemouseover(){
  //   alert("I am a para");
  // }
  return (
    <div>
      {/* <button onClick={handleclick}>Click me</button> */}
      {/* <p onMouseOver={handlemouseover}> I am paragraph */}
    
      {/* </p> */}
      {/*Immediate invokation */}
      <button onClick={()=>alert("button click hua h")}>
        click me 
      </button>
    </div>
  )
}

export default App