import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"

const Auth = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState(true)
  const autCtx = useContext(AuthContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const body = {
        username,
        password
    }
    axios.post(`http://localhost:4001/${ register ? "register" : "login" }`, body)
    .then(res => {
      autCtx.login(res.data.token, res.data.userId, res.data.exp)
    })
    .catch(err => {
      setPassword("")
      setUsername("")
      console.log(err)
    })
  }
  return (
    <main>
      <h1>Welcome!</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input
          className="form-input"
          value={username}
          placeholder="Username"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <input
          className="form-input"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button className="form-btn" type="submit">{register ? "Sign Up" : "Login"}</button>
      </form>
      <button
        className="form-btn"
        onClick={() => {
          setRegister(!register)
        }}
      >
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </main>
  )
}

export default Auth
