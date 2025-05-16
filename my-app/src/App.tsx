import { useState } from 'react'
import './App.css'
import Login from './login'
import Register from './register'

function App() {
  
  const [childData,setChilData] =useState("")
  

  return (
    <>
    
      <Login demo={setChilData} />
      <Register  />


      <h2>this is main file</h2>
      <p>{childData}</p>
      
    </>
  )
}

export default App
