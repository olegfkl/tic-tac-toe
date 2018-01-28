describe("Game", function(){
  var game;

  it("should create an instance of a game", function(){
    game = new Game();
    expect(game).toEqual(jasmine.any(Game))
  })

  it("returns player 1", function() {
    expect(game.player1().toEqual("John"))
  })
})
