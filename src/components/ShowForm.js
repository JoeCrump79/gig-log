import React, { useState } from "react";

function ShowForm({ onAddShow }) {
  const [formData, setFormData] = useState({
    artist: "",
    venue: "",
    date: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newShow = {
      ...formData,
      id: crypto.randomUUID() 
    };

    fetch("http://localhost:6001/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShow)
    })
      .then((res) => res.json())
      .then((data) => {
        onAddShow(data); 
        setFormData({ artist: "", venue: "", date: "", description: "" });
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Add a New Show</h2>
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={formData.venue}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="Describe the show"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Show</button>
    </form>
  );
}

export default ShowForm;
