import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowForm from "./components/ShowForm";
import ShowList from "./components/ShowList";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowList />} />
          <Route path="/add-show" element={<ShowForm />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
