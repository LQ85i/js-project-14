import { Ship } from "./ship";

const ship = Ship();
ship.setLength(4);
ship.setPosition([1, 2, 1]);

test("gets ship length", () => {
  expect(ship.getLength()).toBe(4);
});
test("gets ship position", () => {
  expect(ship.getPosition()).toEqual([1, 2, 1]);
});

test("ship hit 3 times", () => {
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.getHits()).toBe(3);
});

test("ship not sunk", () => {
  expect(ship.isSunk()).toBe(false);
});

test("ship hit 4 times", () => {
  ship.hit();
  expect(ship.getHits()).toBe(4);
});
test("ship sunk", () => {
  expect(ship.isSunk()).toBe(true);
});
