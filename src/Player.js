import { includesArray } from "./functions";

const Player = () => {
  let board = null;
  const setBoard = (newBoard) => {
    board = newBoard;
  };
  const getBoard = () => {
    return board;
  };
  const AI = (() => {
    const generateAttack = (board) => {
      const boardSize = board.getSize();
      let x = undefined;
      let y = undefined;

      // try attacking next to known hits first
      const sides = getHitSides(board);
      for (let i = 0; i < sides.length; i++) {
        const coord = sides[i];
        if (
          !includesArray(board.getHits(), coord) &&
          !includesArray(board.getMisses(), coord) &&
          !includesArray(board.getClears(), coord)
        ) {
          return coord;
        }
      }
      // then randomize attack
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (
        includesArray(board.getHits(), [x, y]) ||
        includesArray(board.getMisses(), [x, y]) ||
        includesArray(board.getClears(), [x, y])
      );
      return [x, y];
    };
    const getHitSides = (board) => {
      let allSides = [];

      const hits = board.getHits();
      for (let i = 0; i < hits.length; i++) {
        const hitCoord = hits[i];
        const p1 = [hitCoord[0] - 1, hitCoord[1]];
        const p2 = [hitCoord[0] + 1, hitCoord[1]];
        const p3 = [hitCoord[0], hitCoord[1] - 1];
        const p4 = [hitCoord[0], hitCoord[1] + 1];
        const sides = [p1, p2, p3, p4];
        sides.forEach((p) => {
          if (board.isWithinBoard(p)) {
            allSides.push(p);
          }
        });
      }
      return allSides;
    };
    return { generateAttack };
  })();
  const reset = () => {
    board = null;
  };
  return { setBoard, getBoard, AI, reset };
};

export { Player };
