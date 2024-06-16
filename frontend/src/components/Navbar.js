
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLocation } from 'react-router-dom';

import "../index.css"



const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const location = useLocation()
  console.log(location)


  return (

    <header>
      <div className="navbar">

        {location.pathname == "/search" && <h1>Search</h1>}
        {location.pathname == "/" && <h1>My Splits</h1>}
        {location.pathname == "/profile" && <h1>My Profile</h1>}
        {location.pathname == "/login" && !user && <h1>Welcome</h1>}
        {location.pathname == "/signup" && !user && <h1>Welcome</h1>}


        {!user && <div className="login-signup-container">
          <Link className="option" to="/signup">Sign up</Link>
          <Link className="option" to="/login">Log in</Link>
        </div>}


        {user &&
          <div className="nav-items">
            <Link to="/" className="link">
              <span style={{ fontSize: '30px' }} className="material-symbols-outlined">Home</span>
            </Link>
            {user &&
              <Link to="/search" className="link" style={{
                display: 'flex', justifyContent: 'center'

              }}>
                <span style={{ fontSize: '30px' }} className="material-symbols-outlined">Search</span>
              </Link>
            }
            <Link to="/profile" className="link">
              <span style={{ fontSize: '30px' }} className="material-symbols-outlined">Account_Circle</span>
            </Link>
          </div>
        }
        {/* <nav className="user-nav">
          {user &&
            <div className="logged-in">
              {/* <span>{user && user.username}</span> */}
        {/* <button className="logout-btn" onClick={handleClick}>
                Logout
              </button>
            </div> */}
        {/* } */}
        {/* {!user && (
            <div className="logged-out">
              <Link className="log-link" to="/login">Login</Link>
              <Link className="log-link" to="/signup">Signup</Link>
            </div>
          )} */}
        {/* </nav> } */}

      </div>

    </header >

  )
}
export default Navbar