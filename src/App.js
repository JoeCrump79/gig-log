import React, { useEffect, useState } from "react";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎵 My Concert Log</h1>
      {shows.length === 0 ? (
        <p>Loading shows...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {shows.map((show) => (
            <li
              key={show.id}
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <h2>{show.artist}</h2>
              <p>
                <strong>Venue:</strong> {show.venue}
                <br />
                <strong>Date:</strong> {show.date}
              </p>
              <p>
                <em>{show.description}</em>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
