import shipLength from './helper';

// Ship factory function
const Ship = (type) => {
  const id = type;
  const length = shipLength[type];
  let direction = 'horizontal';

  //  gets direction of the ship
  const getDirection = () => direction;
  const changeDirection = () => {
    direction === 'horizontal'
      ? (direction = 'vertical')
      : (direction = 'horizontal');
  };

  // For the length of the boat, fill the array with null
  const hits = Array(length).fill(null);
  const getHits = () => hits;
  // takes in a number and replaces null in that indes with 'hit', indicating where the boat got hit
  const hit = (i) => { hits[i] = 'hit'; };

  //  checks if the ship is completely hit
  const isSunk = () => hits.every((h) => h === 'hit');

  return {
    id, length, hit, getHits, isSunk, getDirection, changeDirection,
  };
};

// Exporting single factory function, so use default
module.exports = Ship;
