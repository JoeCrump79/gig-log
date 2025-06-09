import React, { useState } from "react";
import ShowCard from "./ShowCard";
import Search from "./Search";

function Home({ shows }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShows = shows.filter((show) =>
    show.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Gig Log</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="show-list">
        {filteredShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default Home;
