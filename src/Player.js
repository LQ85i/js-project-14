const Player = (newName) => {
  let name = newName;
  let board = null;
  const setName = (newName) => {
    name = newName;
  };
  const setBoard = (newBoard) => {
    board = newBoard;
  };
  const getBoard = () => {
    return board;
  };
  const getName = () => {
    return name;
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
        board.getHits().includes([x, y]) ||
        board.getMisses().includes([x, y])
      );
      return [x, y];
    };
    return { generateAttack };
  })();
  return { setName, getName, setBoard, getBoard, AI };
};

export { Player };
