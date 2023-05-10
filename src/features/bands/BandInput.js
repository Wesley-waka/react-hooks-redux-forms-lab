import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return (
    <>
      <div>Band Input</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add Band</button>
      </form>
    </>
  );
}

export default BandInput;
