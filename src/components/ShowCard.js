function ShowCard({ show }) {
  return (
    <div>
      <h3>{show.artist}</h3>
      <p>
        {show.venue} — {show.date}
      </p>
      <p>{show.description}</p>
    </div>
  );
}

export default ShowCard;
