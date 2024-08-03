// src/components/ReservationList.js
import React from 'react';

function ReservationList({ reservations }) {
  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((res, index) => (
          <li key={index}>
            {res.name} - {res.date} at {res.time} for {res.people} people
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
