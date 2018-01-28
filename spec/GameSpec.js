describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game("John", "Ben")
  })

  it("should create an instance of a game", function(){
    var gameTest = new Game();
    expect(gameTest).toEqual(jasmine.any(Game))
  })

  it("returns player 1", function() {
    expect(game.playerOne()).toEqual("John")
  })

  it("returns player 2", function() {
    expect(game.playerTwo()).toEqual("Ben")
  })
})
