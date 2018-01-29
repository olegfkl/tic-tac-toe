describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board()
  });

  it("returns all squares", function() {
    expect(board.squares()).toContain(jasmine.any(Square))
  })

  it("confirms the board has 9 squares", function(){
    expect(board.squares().length).toEqual(9)
  })
})
