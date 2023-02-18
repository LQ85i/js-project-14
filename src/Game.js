import {
  addAttackListeners,
  displayTurn,
  drawIndicators,
  drawPlayerWin,
  drawComputerWin,
  initializeDOM,
} from "./DOMHandler";
import { Player } from "./Player";
import { GameBoard } from "./GameBoard";

const Game = () => {
  let turn = undefined;
  let player = undefined;
  let computer = undefined;
  let winner = undefined;
  let gameRunning = undefined;

  const initialize = () => {
    player = Player();
    computer = Player();
    let board1 = GameBoard();
    let board2 = GameBoard();

    board1.initialize(10, 10, "player");
    board2.initialize(10, 10, "computer");
    player.setBoard(board1);
    computer.setBoard(board2);

    board1.addRandomShips(board1);
    board2.addRandomShips(board2);

    turn = 0; //players turn
    gameRunning = true;
    initializeDOM(player, computer);
    drawIndicators(player, computer);
    addAttackListeners(player.getBoard(), eventHandler);
    addAttackListeners(computer.getBoard(), eventHandler);
    displayTurn(turn);
  };

  const changeTurn = () => {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    displayTurn(turn);
  };

  const playTurn = () => {
    displayTurn(turn);
    if (turn == 1) {
      // computer turn
      setTimeout(() => {
        const data = {
          board: player.getBoard(),
          coord: computer.AI.generateAttack(player.getBoard()),
        };
        eventHandler("attack", data);
      }, 250);
    }
  };

  const checkForWinner = () => {
    if (player.getBoard().areShipsSunk()) {
      return computer;
    } else if (computer.getBoard().areShipsSunk()) {
      return player;
    }
    return null;
  };

  const setWinner = (newWinner) => {
    winner = newWinner;
    gameRunning = false;
    if (winner == player) {
      drawPlayerWin();
    } else if (winner == computer) {
      drawComputerWin();
    }
  };

  const resetGame = () => {
    turn = null;
    player.reset();
    player = null;
    computer.reset();
    computer = null;
    winner = null;
    gameRunning = null;

    initialize();
  };

  const eventHandler = (event, data) => {
    if (event === "attack" && gameRunning) {
      if (
        (data.board.getOwner() === "player" && turn === 1) ||
        (data.board.getOwner() === "computer" && turn === 0)
      ) {
        const attack = data.board.receiveAttack(data.coord);
        if (attack !== "fail") {
          const winner = checkForWinner();
          if (winner == null) {
            drawIndicators(player, computer);
            if (attack == "miss") {
              changeTurn();
              playTurn();
            } else {
              playTurn();
            }
          } else {
            drawIndicators(player, computer);
            setWinner(winner);
          }
        }
      }
    }
  };

  const playAgain = document.getElementById("play-again");
  playAgain.addEventListener("click", () => {
    resetGame();
  });
  return { initialize, eventHandler, setWinner, resetGame };
};

export { Game };
