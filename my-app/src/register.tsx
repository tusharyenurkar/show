import { useState } from 'react'
import './App.css'

interface RegisterProps {
  onSubmit?: (data: { name: string; email: string; password: string; confirmPassword: string } | null) => void;
}

function Register({ onSubmit }: RegisterProps) {
  const [Rname, setRname] = useState("")
  const [Remail, setRemail] = useState("")
  const [Rpassword, setRpassword] = useState("")
  const [RCpassword, setCpassword] = useState("")
  const [registerOutput, setRegisterOutput] = useState("")

  const handleRegisterSubmit = () => {
    const data = { name: Rname, email: Remail, password: Rpassword, confirmPassword: RCpassword }
    setRegisterOutput(JSON.stringify(data))
    if (onSubmit) {
      onSubmit(data)
    }
  }

  const resetRegistration = () => {
    setRname("")
    setRemail("")
    setRpassword("")
    setCpassword("")
    setRegisterOutput("")
    if (onSubmit) {
      onSubmit(null)
    }
  }

  return (
    <>
      <div >
        <h2>Registration Form</h2>

        <p> {Rname}</p>
        <input
          type="text"
          placeholder="Name"
          value={Rname}
          onChange={(e) => setRname(e.target.value)}
        />
        <br /><br />

        <p> {Remail}</p>
        <input
          type="text"
          placeholder="Email"
          value={Remail}
          onChange={(e) => setRemail(e.target.value)}
        />
        <br /><br />

        <p> {Rpassword}</p>
        <input
          type="password"
          placeholder="Password"
          value={Rpassword}
          onChange={(e) => setRpassword(e.target.value)}
        />
        <br /><br />

        <p> {RCpassword}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          value={RCpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <br /><br />

        <button onClick={resetRegistration}>Clear</button>
        <button onClick={handleRegisterSubmit}>Submit</button>
        <pre>{registerOutput}</pre>
      </div>
    </>
  )
}

export default Register
