import { Ship } from "./ship";

const GameBoard = () => {
  let width = null;
  let height = null;
  let ships = []; // object
  let map = null;
  let hits = [];
  let misses = [];
  const setup = (w, h) => {
    if (w >= 1 && h >= 1) {
      width = w;
      height = h;
      map = Array(width).fill(Array(height).fill(null));
    }
  };

  const addShip = (length) => {
    const ship = Ship();
    ship.setLength(length);
    ships.push(ship);
  };

  const placeShip = (ship, pos) => {
    //check if there is room for full ship
    if (shipPositionAvailable(ship.getLength(), pos)) {
      ship.setPosition(pos);
      if (pos[2] === 0) {
        for (let i = 0; i < ship.getLength(); i++) {
          map[pos[0] + i][pos[1]] = ship;
        }
      } else if (pos[2] === 1) {
        for (let i = 0; i < ship.getLength(); i++) {
          map[pos[0]][pos[1] + i] = ship;
        }
      }
    }
  };
  const shipPositionAvailable = (length, pos) => {
    if (pos[2] === 0) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0] + i, pos[1]];
        if (shipInCoordinate(coord) !== null || !isWithinBoard(coord)) {
          return false;
        }
      }
    } else if (pos[2] === 1) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0], pos[1] + i];
        if (shipInCoordinate(coord) !== null || !isWithinBoard(coord)) {
          return false;
        }
      }
    }
    return true;
  };

  const shipInCoordinate = (coord) => {
    return map[coord[0]][coord[1]];
  };

  const getSize = () => {
    return [width, height];
  };

  const isWithinBoard = (coord) => {
    if (
      coord[0] >= 0 &&
      coord[0] < width &&
      coord[1] >= 0 &&
      coord[1] < height
    ) {
      return true;
    }
    return false;
  };
  const receiveAttack = (coord) => {
    if (!hits.includes(coord) && !misses.includes(coord)) {
      const ship = shipInCoordinate(coord);
      if (ship !== null) {
        ship.hit();
        hits.push(coord);
      } else {
        misses.push(coord);
      }
    }
  };

  return {
    setup,
    addShip,
    placeShip,
    shipInCoordinate,
    getSize,
    receiveAttack,
  };
};

export { GameBoard };
