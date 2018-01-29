
function Game() {
  this._playerOne = 'X'
  this._playerTwo = 'O'
  this._turn      =  null

};

Game.prototype.playerOne = function () {
  return this._playerOne
};

Game.prototype.playerTwo = function () {
  return this._playerTwo
};

Game.prototype.setTurn = function (player) {
  return this._turn = player
};

Game.prototype.currentPlayer = function () {
  return this._turn
};

Game.prototype.switchTurn = function () {
  if(this.currentPlayer() === this.playerTwo()) {
    this.setTurn(this.playerOne())
  } else {
    this.setTurn(this._playerTwo)
  };

  return this.currentPlayer();
};
