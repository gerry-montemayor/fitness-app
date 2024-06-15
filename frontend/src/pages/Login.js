import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }


  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Username:</label>
      <input
        style={{ color: 'black' }}
        type="username"
        onChange={(e) => { setUsername(e.target.value) }}
      />

      <label>Password:</label>
      <input
        style={{ color: 'black' }}

        type="password"
        onChange={(e) => { setPassword(e.target.value) }}
      />

      <button disabled={isLoading}>Login </button>
      {error && <div>{error}</div>}

    </form>



  )


}

export default Login