import React from "react";
import ShowCard from "./ShowCard";

function ShowList({ shows }) {
  return (
    <div>
      <h2>Show List</h2>
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default ShowList;
