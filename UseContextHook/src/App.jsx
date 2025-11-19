
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA';
// step1-Create context Provider
const UserContext= createContext();
// step2-Wrap all the child inside a provider
// step3-Pass value
// step4-consumer ke andar jaakr consume krlo

function App() {
  const[user,SetUser]=useState({name:"aditya"});
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>


    </div>   
  )
}

export default App
export{UserContext}

