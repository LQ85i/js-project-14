const Ship = () => {
  let length = null;
  let position = null; // x, y, direction{0: horizontal, 1: vertical}
  let hits = 0;
  let sunk = false;
  const setLength = (len) => {
    if (len >= 2 && len <= 5) {
      length = len;
    }
  };
  const setPosition = (pos) => {
    position = pos;
  };
  const getLength = () => {
    return length;
  };
  const getPosition = () => {
    return position;
  };
  const getHits = () => {
    return hits;
  };
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
      return true;
    } else {
      return false;
    }
  };
  return {
    setLength,
    setPosition,
    getLength,
    getPosition,
    getHits,
    hit,
    isSunk,
  };
};

export { Ship };
