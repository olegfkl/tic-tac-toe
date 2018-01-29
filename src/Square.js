
function Square(number) {
  this._number = number
}

Square.prototype.number = function () {
  return this._number
};
