
function Player(name) {
  this._name  = name
  this._moves = [] 
}

Player.prototype.name = function () {
  return this._name
};
