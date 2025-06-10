import React, { useState } from "react";
import ShowCard from "./ShowCard";
import Search from "./Search";

function Home({ shows }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShows = shows.filter((show) =>
    show.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Gig Log</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {filteredShows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default Home;
