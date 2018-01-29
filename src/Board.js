
function Board(square = Square) {
  this._squares = [
    new square(0), new square(1), new square(2),
    new square(3), new square(4), new square(5),
    new square(6), new square(7), new square(8)
  ]
};

Board.prototype.squares = function () {
  return this._squares
};
