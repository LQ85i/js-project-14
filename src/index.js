import "./styles.css";
import { Player } from "./Player";
import { GameBoard } from "./GameBoard";
import { Ship } from "./Ship";
import { Game } from "./Game";
import { drawIndicators } from "./DOMHandler";

const initializeGame = () => {
  let player = Player();
  let computer = Player();
  let board1 = GameBoard();
  let board2 = GameBoard();

  board1.initialize(10, 10, "player");
  board2.initialize(10, 10, "computer");
  player.setBoard(board1);
  computer.setBoard(board2);

  const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  for (let i = 0; i < shipLengths.length; i++) {
    let ship1 = Ship();
    let ship2 = Ship();
    ship1.setLength(shipLengths[i]);
    ship2.setLength(shipLengths[i]);
    if (i < 5) {
      board1.addShip(ship1, [i, i * 2, 0]);
      board2.addShip(ship2, [i, i * 2, 0]);
    } else {
      board1.addShip(ship1, [i, (i - 5) * 2, 0]);
      board2.addShip(ship2, [i, (i - 5) * 2, 0]);
    }
  }

  let game = Game();
  game.initialize(player, computer);

  drawIndicators(player, computer);
  return { player, computer };
};

let players = initializeGame();
