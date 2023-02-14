const Ship = () => {
  let length = undefined;
  let position = undefined; // x, y, direction{0: horizontal, 1: vertical}
  let hits = 0;
  const setLength = (len) => {
    if (len >= 1 && len <= 4) {
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
