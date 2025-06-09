import React from "react";
import ShowCard from "./ShowCard";

function Home({ searchTerm, setSearchTerm, shows }) {
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
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default Home;
