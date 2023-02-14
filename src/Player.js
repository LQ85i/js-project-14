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
      do {
        x = Math.floor(Math.random() * boardSize[0]);
        y = Math.floor(Math.random() * boardSize[1]);
      } while (
        includesArray(board.getHits(), [x, y]) ||
        includesArray(board.getMisses(), [x, y])
      );
      return [x, y];
    };
    return { generateAttack };
  })();
  return { setBoard, getBoard, AI };
};

export { Player };
