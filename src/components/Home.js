import React, { useState } from "react";
import ShowCard from "./ShowCard";

function Home({ shows }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShows = shows.filter((show) =>
    show.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Gig Log</h2>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by artist..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredShows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default Home;
