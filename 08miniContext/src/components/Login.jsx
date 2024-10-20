import React, {useState, useContext} from 'react'
    const [username, setUsername] = useState('')
    const handleSubmit = () => {
    }

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input 
      value={username}
      onChange={ (e) => setUsername(e.target.value)}
      type="text" placeholder='username' />
      <input type="text" 
        value={password}
        onChange={ (e) => setUsername(e.target.value)}
        placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login