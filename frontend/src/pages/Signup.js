import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {signup,error,isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username,password)
  }


  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

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

      <button disabled={isLoading}>Sign Up</button>
      {error && <div style={{color: 'red'}}> {error}</div>}

    </form>



  )


}

export default Signup

