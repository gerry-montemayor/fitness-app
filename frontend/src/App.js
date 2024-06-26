import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Search from './pages/Search'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

function App() {

  const { user } = useAuthContext()

  return (
    <div className="entire-page">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/search"
              element={user ? <Search /> : <Navigate to="/" />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route
              path="/profile"
              element={user ? <Profile/> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
