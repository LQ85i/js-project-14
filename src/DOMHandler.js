import { includesArray } from "./functions";

const drawIndicators = (player, computer) => {
  document.querySelectorAll(".cell-content").forEach((e) => e.remove());

  const playerBoard = document.getElementById("board-player");
  const computerBoard = document.getElementById("board-computer");
  const playerGrid = playerBoard.querySelector(".board-grid");
  const computerGrid = computerBoard.querySelector(".board-grid");

  for (let j = 0; j < player.getBoard().getSize()[1]; j++) {
    const row = playerGrid.children[j];
    for (let i = 0; i < player.getBoard().getSize()[0]; i++) {
      let cell = row.children[i];
      if (player.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if (includesArray(player.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
        } else {
          content.classList.add("indicator-ship");
        }
        cell.appendChild(content);
      } else {
        if (includesArray(player.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        }
      }
    }
  }
  for (let j = 0; j < computer.getBoard().getSize()[1]; j++) {
    const row = computerGrid.children[j];
    for (let i = 0; i < computer.getBoard().getSize()[0]; i++) {
      let cell = row.children[i];
      if (computer.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if (includesArray(computer.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
        }
        cell.appendChild(content);
      } else {
        if (includesArray(computer.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        }
      }
    }
  }
};

const addAttackListeners = (board, eventHandler) => {
  let boardElem = undefined;
  let gridElem = undefined;

  if (board.getOwner() == "player") {
    boardElem = document.getElementById("board-player");
    gridElem = boardElem.querySelector(".board-grid");
  } else if (board.getOwner() == "computer") {
    boardElem = document.getElementById("board-computer");
    gridElem = boardElem.querySelector(".board-grid");
  }
  for (let j = 0; j < board.getSize()[1]; j++) {
    const row = gridElem.children[j];
    for (let i = 0; i < board.getSize()[0]; i++) {
      let cell = row.children[i];
      cell.addEventListener("click", () => {
        eventAttack(board, [i, j], eventHandler);
      });
    }
  }
};

const displayTurn = (turn) => {
  const board1 = document.querySelector("#board-player .board-grid");
  const board2 = document.querySelector("#board-computer .board-grid");
  if (turn == 0) {
    board1.classList.add("blur-out");
    board2.classList.remove("blur-out");
  } else {
    board1.classList.remove("blur-out");
    board2.classList.add("blur-out");
  }
};

const eventAttack = (board, coord, eventHandler) => {
  const data = { board, coord };
  eventHandler("attack", data);
};

export { drawIndicators, addAttackListeners, displayTurn };
