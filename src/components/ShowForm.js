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
    <form onSubmit={handleSubmit}>
      <h2>Add a New Show</h2>

      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Venue:
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Show</button>
    </form>
  );
}

export default ShowForm;
