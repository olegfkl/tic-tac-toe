
function Game(playerOne = Player, playerTwo = Player) {
  this._playerOne = new playerOne('X')
  this._playerTwo = new playerTwo('O')
  this._turn      =  null
  this._rules     = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

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
  if(this.currentPlayer().name() === this.playerTwo().name()) {
    this.setTurn(this.playerOne())
  } else {
    this.setTurn(this.playerTwo())
  };

  return this.currentPlayer();
};
