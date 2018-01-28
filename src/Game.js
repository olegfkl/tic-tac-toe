

function Game(playerOne, playerTwo) {
  this._playerOne = playerOne
  this._player2 = playerTwo
  this._turn = playerOne
}

Game.prototype.playerOne = function () {
  return this._playerOne  
};
