import React from 'react';
import './Reservations.css';
import ResyCard from '../ResyCard/ResyCard';

const Reservations = ({ reservations }) => {

  const reservationsToDisplay = reservations.map(reservation => {
    return(
      <ResyCard 
        reservation={ reservation }
        key={ reservation.id }
      />
    )
  })

  return(
    <>
      { reservationsToDisplay }
    </>
  )

}


export default Reservations;