import { addAttackListeners, displayTurn, drawIndicators } from "./DOMHandler";

const Game = () => {
  let turn = undefined;
  let player = undefined;
  let computer = undefined;

  const initialize = (newPlayer, newComputer) => {
    turn = 0; //players turn
    player = newPlayer;
    computer = newComputer;
    addAttackListeners(player.getBoard(), eventHandler);
    addAttackListeners(computer.getBoard(), eventHandler);
    displayTurn(turn);
  };

  const changeTurn = () => {
    if (turn == 0) {
      // set turn to computer
      turn = 1;

      setTimeout(() => {
        const data = {
          board: player.getBoard(),
          coord: computer.AI.generateAttack(player.getBoard()),
        };
        eventHandler("attack", data);
      }, 1000);
    } else {
      // set turn to player
      turn = 0;
    }
    displayTurn(turn);
    drawIndicators(player, computer);
  };

  const eventHandler = (event, data) => {
    if (event === "attack") {
      if (
        (data.board.getOwner() === "player" && turn === 1) ||
        (data.board.getOwner() === "computer" && turn === 0)
      ) {
        if (data.board.receiveAttack(data.coord)) {
          changeTurn();
          return;
        }
      }
    }
  };

  return { initialize, eventHandler };
};

export { Game };
