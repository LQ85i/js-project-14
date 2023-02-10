import { GameBoard } from "./GameBoard";
import { Ship } from "./Ship";

const board = GameBoard();
board.initialize(10, 10);
const ship1 = Ship();
ship1.setLength(4);
const ship2 = Ship();

test("gets board size", () => {
  expect(board.getSize()).toEqual([10, 10]);
});

test("ship 1 correctly placed 1", () => {
  board.addShip(ship1, [0, 0, 0]);
  expect(board.shipInCoordinate([0, 0])).toEqual(ship1);
});
test("ship 1 correctly placed 2", () => {
  expect(board.shipInCoordinate([3, 0])).toEqual(ship1);
});
test("ship 1 correctly placed 3", () => {
  expect(board.shipInCoordinate([1, 2])).toBe(null);
});

test("attack ship 1", () => {
  board.receiveAttack([0, 0]);
  expect(ship1.getHits()).toBe(1);
});
test("finish sinking ship 1", () => {
  board.receiveAttack([1, 0]);
  board.receiveAttack([2, 0]);
  board.receiveAttack([3, 0]);
  expect(ship1.isSunk()).toBe(true);
});
test("report if all ships sunk", () => {
  expect(board.areShipsSunk()).toBe(true);
});

test("ship 2 correctly placed 1", () => {
  ship2.setLength(4);
  board.addShip(ship2, [4, 4, 0]);
  expect(board.shipInCoordinate([4, 4])).toEqual(ship2);
});

test("report ship 2 not sunk", () => {
  expect(ship2.isSunk()).toBe(false);
});

test("report all ships not sunk after adding a ship", () => {
  expect(board.areShipsSunk()).toBe(false);
});
