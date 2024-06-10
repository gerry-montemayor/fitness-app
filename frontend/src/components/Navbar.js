
import { Link } from 'react-router-dom'

import "../index.css"



const Navbar = () => {
  return (

    <header>
      <div className="navbar">
        <Link to="/" className="link">
          <h1>Fitness App</h1>
        </Link>


        <Link to="/search" className="link">
            Search
        </Link>

      </div>
    </header >
  )
}
export default Navbar