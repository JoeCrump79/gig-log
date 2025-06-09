import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ShowForm from "./components/ShowForm";
import ShowList from "./components/ShowList";
import "./App.css";

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function handleAddShow(newShow) {
    setShows((prev) => [...prev, newShow]);
  }

  const filteredShows = shows.filter((show) =>
    show.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                shows={filteredShows}
              />
            }
          />
          <Route path="/shows" element={<ShowList shows={filteredShows} />} />
          <Route
            path="/add-show"
            element={<ShowForm onAddShow={handleAddShow} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
