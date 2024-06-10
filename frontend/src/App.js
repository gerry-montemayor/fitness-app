import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from "./pages/Home"
import SearchExercises from './components/SearchExercises'
import Navbar from "./components/Navbar"
import Splits from "./components/SplitDetails"


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
              element={<SearchExercises />} />
            <Route
              path="/splits"
              element={<Splits />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
