
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import "../index.css"



const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (

    <header>
      <div className="navbar">
        <Link to="/" className="link">
          <h1>Fitness App</h1>
        </Link>
        <Link to="/search" className="link">
          Search
        </Link>
        <nav>
          {user &&
            <div>
              <span>{user && user.email}</span>
              <button onClick={handleClick}>
                Logout
              </button>
            </div>
          }
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}


        </nav>
      </div>
    </header >
  )
}
export default Navbar