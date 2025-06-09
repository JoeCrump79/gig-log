import React, { useState } from "react";

const initialFormState = {
  artist: "",
  venue: "",
  date: "",
  description: "",
};

function ShowForm({ onAddShow }) {
  const [formData, setFormData] = useState(initialFormState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newShow) => {
        onAddShow(newShow);
        setFormData(initialFormState);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="show-form">
      <h2>Add a New Show</h2>

      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={formData.venue}
        onChange={handleChange}
      />
      <input
        type="date" 
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Add Show</button>
    </form>
  );
}

export default ShowForm;
