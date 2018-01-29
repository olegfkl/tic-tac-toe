describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game()
  })

  it("should create an instance of a game", function() {
    var gameTest = new Game();
    expect(gameTest).toEqual(jasmine.any(Game))
  })

  it("returns player 1", function() {
    expect(game.playerOne()).toEqual(jasmine.any(Player))
  })

  it("returns player 2", function() {
    expect(game.playerTwo()).toEqual(jasmine.any(Player))
  })

  describe("#setTurn", function() {
    it("sets which player will claim a field first", function() {
      expect(game.setTurn(game.playerOne())).toEqual(jasmine.any(Player))
    })
  })

  describe("#playerTurn", function() {
    it("returns which player's turn", function() {
      game.setTurn(game.playerTwo())
      expect(game.currentPlayer().name()).toEqual('O')
    })
  })

  describe("#switchTurn", function() {
    it("switches player's turn", function() {
      game.setTurn(game.playerTwo())
      expect(game.switchTurn()).toEqual(jasmine.any(Player))
      expect(game.currentPlayer().name()).toEqual('X')
    })
  })
})
