import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from "./pages/Home"
import SearchExercises from './components/search/SearchExercises'
import Navbar from "./components/Navbar"
import Splits from "./components/split/SplitDetails"
import Search from './pages/Search'

function App() {
  return (
    <div className="entire-page">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/search"
              element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
