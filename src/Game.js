

function Game(playerOne, playerTwo) {
  this._playerOne = playerOne
  this._playerTwo = playerTwo
  this._turn = playerOne
}

Game.prototype.playerOne = function () {
  return this._playerOne
};

Game.prototype.playerTwo = function () {
  return this._playerTwo
};
