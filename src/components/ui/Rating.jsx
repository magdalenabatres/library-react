import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const safeRating = Number(rating) || 0;
  return (
    <div className="book__rating">
      {new Array(Math.floor(safeRating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}

      {!Number.isInteger(safeRating) && safeRating > 0  && (
        <FontAwesomeIcon icon={faStarHalfAlt} />
      )}
    </div>
  );
};

export default Rating;