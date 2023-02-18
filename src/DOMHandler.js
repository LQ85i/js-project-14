import { includesArray } from "./functions";

const initializeDOM = (player, computer) => {
  initializeGrids(player, computer);
  removeListeners();
  resetWinMsg();
};

const initializeGrids = (player, computer) => {
  let playerGrid = document.querySelector("#board-player .board-grid");
  let computerGrid = document.querySelector("#board-computer .board-grid");
  playerGrid.innerHTML = "";
  computerGrid.innerHTML = "";
  for (let j = 0; j < 10; j++) {
    //create row
    const row = document.createElement("div");
    row.classList.add("board-row");
    for (let i = 0; i < 10; i++) {
      //create cell
      const cell = document.createElement("div");
      cell.classList.add("board-cell");
      row.appendChild(cell);
    }
    playerGrid.appendChild(row);
  }
  for (let j = 0; j < 10; j++) {
    //create row
    const row = document.createElement("div");
    row.classList.add("board-row");
    for (let i = 0; i < 10; i++) {
      //create cell
      const cell = document.createElement("div");
      cell.classList.add("board-cell");
      row.appendChild(cell);
    }
    computerGrid.appendChild(row);
  }
};

const removeListeners = () => {
  document.querySelectorAll(".board-cell").forEach((e) => {
    //
  });
};

const resetWinMsg = () => {
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.remove("blur-out");
  board2Grid.classList.remove("blur-out");
  document.querySelectorAll(".win-layer").forEach((e) => e.remove());
};

const drawIndicators = (player, computer) => {
  document.querySelectorAll(".cell-content").forEach((e) => e.remove());

  const playerBoard = document.getElementById("board-player");
  const computerBoard = document.getElementById("board-computer");
  const playerGrid = playerBoard.querySelector(".board-grid");
  const computerGrid = computerBoard.querySelector(".board-grid");

  for (let j = 0; j < 10; j++) {
    const row = playerGrid.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];
      if (player.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if (includesArray(player.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
          if (player.getBoard().shipInCoordinate([i, j]).isSunk()) {
            content.classList.add("indicator-sunk");
          }
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
        } else if (includesArray(player.getBoard().getClears(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-clear");
          cell.appendChild(content);
        }
      }
    }
  }
  for (let j = 0; j < 10; j++) {
    const row = computerGrid.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];
      if (computer.getBoard().shipInCoordinate([i, j]) !== null) {
        const content = document.createElement("div");
        content.classList.add("cell-content");
        if (includesArray(computer.getBoard().getHits(), [i, j])) {
          content.classList.add("indicator-hit");
          if (computer.getBoard().shipInCoordinate([i, j]).isSunk()) {
            content.classList.add("indicator-sunk");
          }
        }
        cell.appendChild(content);
      } else {
        if (includesArray(computer.getBoard().getMisses(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-miss");
          cell.appendChild(content);
        } else if (includesArray(computer.getBoard().getClears(), [i, j])) {
          const content = document.createElement("div");
          content.classList.add("cell-content");
          content.classList.add("indicator-clear");
          cell.appendChild(content);
        }
      }
    }
  }
};

const addAttackListeners = (board, eventHandler) => {
  let boardElem = null;
  let gridElem = null;

  if (board.getOwner() == "player") {
    boardElem = document.getElementById("board-player");
    gridElem = boardElem.querySelector(".board-grid");
  } else if (board.getOwner() == "computer") {
    boardElem = document.getElementById("board-computer");
    gridElem = boardElem.querySelector(".board-grid");
  }
  for (let j = 0; j < 10; j++) {
    const row = gridElem.children[j];
    for (let i = 0; i < 10; i++) {
      let cell = row.children[i];

      cell.addEventListener("click", () => {
        const data = {
          board,
          coord: [i, j],
        };
        eventHandler("attack", data);
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

const drawComputerWin = () => {
  const board = document.getElementById("board-player");
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.add("blur-out");
  board2Grid.classList.add("blur-out");
  const winLayer = document.createElement("div");
  winLayer.classList.add("win-layer");
  winLayer.innerHTML = "Computer Wins!";
  board.appendChild(winLayer);
};

const drawPlayerWin = () => {
  const board = document.getElementById("board-computer");
  const board1Grid = document.querySelector("#board-computer .board-grid");
  const board2Grid = document.querySelector("#board-player .board-grid");
  board1Grid.classList.add("blur-out");
  board2Grid.classList.add("blur-out");
  const winLayer = document.createElement("div");
  winLayer.classList.add("win-layer");
  winLayer.innerHTML = "Player Wins!";
  board.appendChild(winLayer);
};

export {
  drawIndicators,
  addAttackListeners,
  displayTurn,
  drawPlayerWin,
  drawComputerWin,
  initializeDOM,
};
