
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
        {user &&
          <Link to="/search" className="link">
            Search
          </Link>
        }
        <nav className="user-nav">
          {user &&
            <div className="logged-in">
              <span>{user && user.username}</span>
              <button className="logout-btn" onClick={handleClick}>
                Logout
              </button>
            </div>
          }
          {!user && (
            <div className="logged-out">
              <Link className="log-link" to="/login">Login</Link>
              <Link className="log-link" to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header >
  )
}
export default Navbar