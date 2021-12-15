// Constants
export const shipType = [
  'carrier',
  'battleship',
  'cruiser',
  'submarine',
  'destroyer',
];

export const shipLength = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

// Functions
const randNum = (size = 10) => Math.floor(Math.random() * size);

export const randCoords = (size = 10) => [randNum(size), randNum(size)];
