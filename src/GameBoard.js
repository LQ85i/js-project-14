import { includesArray } from "./functions";
import { Ship } from "./Ship";

const GameBoard = () => {
  let width = undefined;
  let height = undefined;
  let ships = undefined;
  let map = undefined;
  let hits = undefined;
  let misses = undefined;
  let owner = undefined;
  let clears = undefined;
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
      clears = [];
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

  const addDefaultShips = (board) => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    for (let i = 0; i < shipLengths.length; i++) {
      let ship = Ship();
      ship.setLength(shipLengths[i]);
      if (i < 5) {
        board.addShip(ship, [i, i * 2, 0]);
      } else {
        board.addShip(ship, [i, (i - 5) * 2, 0]);
      }
    }
  };

  const addRandomShips = (board) => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    let x = undefined;
    let y = undefined;
    let dir = undefined;
    for (let i = 0; i < shipLengths.length; i++) {
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        dir = Math.floor(Math.random() * 2);
      } while (!board.shipPositionAvailable(shipLengths[i], [x, y, dir]));
      let ship = Ship();
      ship.setLength(shipLengths[i]);
      board.addShip(ship, [x, y, dir]);
    }
  };

  const shipPositionAvailable = (length, pos) => {
    if (pos[2] === 0) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0] + i, pos[1]];
        if (!isWithinBoard(coord)) {
          return false;
        } else {
          if (shipInCoordinate(coord) !== null || isNextToShip(coord)) {
            return false;
          }
        }
      }
    } else if (pos[2] === 1) {
      for (let i = 0; i < length; i++) {
        const coord = [pos[0], pos[1] + i];
        if (!isWithinBoard(coord)) {
          return false;
        } else {
          if (shipInCoordinate(coord) !== null || isNextToShip(coord)) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const isNextToShip = (coord) => {
    const p1 = [coord[0] - 1, coord[1] - 1];
    const p2 = [coord[0] - 1, coord[1]];
    const p3 = [coord[0] - 1, coord[1] + 1];
    const p4 = [coord[0], coord[1] - 1];
    const p5 = [coord[0], coord[1] + 1];
    const p6 = [coord[0] + 1, coord[1] - 1];
    const p7 = [coord[0] + 1, coord[1]];
    const p8 = [coord[0] + 1, coord[1] + 1];
    const adjacents = [p1, p2, p3, p4, p5, p6, p7, p8];
    for (let i = 0; i < adjacents.length; i++) {
      const p = adjacents[i];
      if (isWithinBoard(p)) {
        if (shipInCoordinate(p) !== null) {
          return true;
        }
      }
    }
    return false;
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
  const getClears = () => {
    return clears;
  };
  const getOwner = () => {
    return owner;
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
    if (
      !includesArray(hits, coord) &&
      !includesArray(misses, coord) &&
      !includesArray(clears, coord)
    ) {
      const ship = shipInCoordinate(coord);
      if (ship !== null) {
        ship.hit();
        hits.push(coord);
        markCornersClear(coord);
        if (ship.isSunk()) {
          markSurroundingsClear(ship);
        }
        return "hit";
      } else {
        misses.push(coord);
        return "miss";
      }
    }
    return "fail";
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
  const markSurroundingsClear = (ship) => {
    const pos = ship.getPosition();
    for (
      let x = pos[0] - 1;
      x <= pos[0] + Math.max(1, Math.abs(pos[2] - 1) * ship.getLength());
      x++
    ) {
      if (x < 0 || x > 9) {
        continue;
      }

      for (
        let y = pos[1] - 1;
        y <= pos[1] + Math.max(1, pos[2] * ship.getLength());
        y++
      ) {
        if (y < 0 || y > 9) {
          continue;
        }
        if (
          !includesArray(misses, [x, y]) &&
          !includesArray(hits, [x, y]) &&
          !includesArray(clears, [x, y]) &&
          !shipInCoordinate([x, y])
        ) {
          clears.push([x, y]);
        }
      }
    }
  };

  const markCornersClear = (hitCoord) => {
    const p1 = [hitCoord[0] - 1, hitCoord[1] - 1];
    const p2 = [hitCoord[0] + 1, hitCoord[1] - 1];
    const p3 = [hitCoord[0] - 1, hitCoord[1] + 1];
    const p4 = [hitCoord[0] + 1, hitCoord[1] + 1];
    const corners = [p1, p2, p3, p4];
    corners.forEach((p) => {
      if (
        isWithinBoard(p) &&
        !includesArray(misses, p) &&
        !includesArray(clears, p)
      ) {
        clears.push(p);
      }
    });
  };

  const reset = () => {
    width = null;
    height = null;
    ships = null;
    map = null;
    hits = null;
    misses = null;
    owner = null;
  };

  return {
    initialize,
    addShip,
    addDefaultShips,
    addRandomShips,
    shipInCoordinate,
    shipPositionAvailable,
    isWithinBoard,
    getSize,
    getShips,
    getMap,
    getHits,
    getMisses,
    getClears,
    getOwner,
    receiveAttack,
    areShipsSunk,
    reset,
  };
};

export { GameBoard };
