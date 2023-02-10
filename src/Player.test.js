import { GameBoard } from "./GameBoard";
import { Ship } from "./Ship";
import { Player } from "./Player";

const player1 = Player("player 1");
const player2 = Player("player 2");
let board1 = GameBoard();
let board2 = GameBoard();
board1.initialize(10, 10);
board2.initialize(10, 10);
player1.setBoard(board1);
player2.setBoard(board2);

test("get player 1 name", () => {
  expect(player1.getName()).toBe("player 1");
});

test("get player 1 board", () => {
  expect(player1.getBoard()).toBe(board1);
});

test("get ships in player 1 board", () => {
  const ship1 = Ship();
  const ship2 = Ship();
  ship1.setLength(3);
  ship2.setLength(5);
  player1.getBoard().addShip(ship1, [0, 0, 0]);
  player1.getBoard().addShip(ship2, [1, 1, 0]);
  expect(player1.getBoard().getShips()).toEqual([ship1, ship2]);
});

test("clear boards and add 5 ships to each board", () => {
  board1 = player1.getBoard();
  board2 = player2.getBoard();
  board1.initialize(10, 10);
  board2.initialize(10, 10);
  for (let i = 0; i < 5; i++) {
    const ship1 = Ship();
    const ship2 = Ship();
    ship1.setLength(2);
    ship2.setLength(2);
    board1.addShip(ship1, [0, i, 0]);
    board2.addShip(ship2, [0, i, 0]);
  }
  expect(board1.getShips().length + board2.getShips().length).toBe(10);
});

test("do 5 hits and 5 misses on each board", () => {
  for (let i = 0; i < 5; i++) {
    board1.receiveAttack([0, i]);
    board2.receiveAttack([0, i]);
    board1.receiveAttack([2, i]);
    board2.receiveAttack([2, i]);
  }
  expect(
    board1.getHits().length +
      board2.getHits().length +
      board1.getMisses().length +
      board2.getMisses().length
  ).toBe(20);
});

test("do 5 computer generated attacks on random untouched coordinates", () => {
  //player 2 is computer, attacks board 1
  for (let i = 0; i < 5; i++) {
    const coord = player2.AI.generateAttack(board1);
    board1.receiveAttack(coord);
    console.log(
      "[" +
        board1.getHits().join("],[") +
        "]" +
        " - " +
        "[" +
        board1.getMisses().join("],[") +
        "]"
    );
  }
  expect(board1.getHits().length + board1.getMisses().length).toBe(15);
});
