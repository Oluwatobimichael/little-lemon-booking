// src/App.js
import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import ReservationList from './components/ReservationList';

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div className="App">
      <h1>Little Lemon Restaurant</h1>
      <BookingForm onAddReservation={addReservation} />
      <ReservationList reservations={reservations} />
    </div>
  );
}

export default App;
