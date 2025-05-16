import { useState } from 'react'
import './App.css'

function Login({ demo }: { demo?: (newType: string) => void }) {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [loginOutput, setLoginOutput] = useState("")
  const [dataShow,SetDataShow]=useState("")

  const handleLoginSubmit = () => {
    const data = { name, password }
    SetDataShow(JSON.stringify(data))
    if (demo) {
      demo(JSON.stringify(data))
    }
    
  }

  
  const resetLogin = () => {
    setName("")
    setPassword("")
    setLoginOutput("")
    SetDataShow("")
    if (demo) {
      demo("")
    }
    
  }

  return (
    <>
      <div>
        
        <h2>Login Form</h2>
        <p>{dataShow}</p>

        <p>{name}</p>
        <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <p> {password}</p>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button onClick={resetLogin}>Clear</button>
        <button onClick={handleLoginSubmit}>Submit</button>
        <pre>{loginOutput}</pre>
      </div>
    </>
  )
}

export default Login
