import React from "react";
import ShowCard from "./ShowCard";
import Search from "./Search"; 

function Home({ shows, searchTerm, setSearchTerm }) {
  return (
    <div className="home">
      <h2>Gig Log</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> 
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default Home;
