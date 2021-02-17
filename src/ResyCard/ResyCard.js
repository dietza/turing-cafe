import React from 'react';
import './ResyCard.css';

const ResyCard = ({ reservation, key }) => {
  return(
    <article className="reservation-card">

      <h2>{ reservation.name }</h2>
      <h3>{ reservation.date }</h3>
      <h3>{`${ reservation.time }pm`}</h3>
      <h3>{`Number of Guests: ${ reservation.number }`}</h3>
      <button>Cancel</button>

    </article>
  )
}


export default ResyCard;