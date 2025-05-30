import ShowList from "./components/ShowList";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Gig Log</h1>
      <ShowList />
    </div>
  );
}


export default App;
