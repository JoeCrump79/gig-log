function ShowCard({ show }) {
  return (
    <div className="show-card">
      <h3 id="artist">{show.artist}</h3>
      <p id="venue">{show.venue} — {show.date}</p>
      <p id="description">{show.description}</p>
    </div>
  );
}

export default ShowCard;
