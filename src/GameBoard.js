import { includesArray } from "./functions";

const GameBoard = () => {
  let width = undefined;
  let height = undefined;
  let ships = undefined;
  let map = undefined;
  let hits = undefined;
  let misses = undefined;
  let owner = undefined;
  const initialize = (w, h, newOwner) => {
    if (w >= 1 && h >= 1) {
      width = w;
      height = h;
      map = Array(width);
      for (let i = 0; i < map.length; i++) {
        map[i] = Array(height).fill(null);
      }
      hits = [];
      misses = [];
      ships = [];
      owner = newOwner;
    }
  };

  const addShip = (ship, pos) => {
    //check if there is room for full ship

    if (shipPositionAvailable(ship.getLength(), pos)) {
      ships.push(ship);
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
        if (shipInCoordinate(coord) !== null || !_isWithinBoard(coord)) {
          return false;
        }
      }
    } else if (pos[2] === 1) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0], pos[1] + i];
        if (shipInCoordinate(coord) !== null || !_isWithinBoard(coord)) {
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
  const getShips = () => {
    return ships;
  };
  const getMap = () => {
    const mapCopy = map;
    return mapCopy;
  };
  const getHits = () => {
    return hits;
  };
  const getMisses = () => {
    return misses;
  };
  const getOwner = () => {
    return owner;
  };
  const _isWithinBoard = (coord) => {
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
    if (!includesArray(hits, coord) && !includesArray(misses, coord)) {
      const ship = shipInCoordinate(coord);
      if (ship !== null) {
        ship.hit();
        hits.push(coord);
      } else {
        misses.push(coord);
      }
      return true;
    }
    return false;
  };
  const areShipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      const ship = ships[i];
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    initialize,
    addShip,
    shipInCoordinate,
    getSize,
    getShips,
    getMap,
    getHits,
    getMisses,
    getOwner,
    receiveAttack,
    areShipsSunk,
  };
};

export { GameBoard };
