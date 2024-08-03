// src/components/BookingForm.js
import React, { useState } from 'react';

function BookingForm({ onAddReservation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReservation({ name, date, time, people });
    setName('');
    setDate('');
    setTime('');
    setPeople('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <label>
        Number of People:
        <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
