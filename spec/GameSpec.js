describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game()
  })

  it("should create an instance of a game", function(){
    var gameTest = new Game();
    expect(gameTest).toEqual(jasmine.any(Game))
  })

  it("returns player 1", function() {
    expect(game.playerOne()).toEqual('X')
  })

  it("returns player 2", function() {
    expect(game.playerTwo()).toEqual('O')
  })

  describe("#setTurn", function(){
    it("Sets which player will claim a field first", function() {
      expect(game.setTurn(game.playerOne())).toEqual('X')
    })
  })

  describe("#playerTurn", function(){
    it("returns which player's turn", function() {
      game.setTurn(game.playerTwo())
      expect(game.currentPlayer()).toEqual('O')
    })
  })

  describe("#switchTurn", function(){
    it("switches player's turn", function() {
      game.setTurn(game.playerTwo())
      expect(game.switchTurn()).toEqual('X')
    })
  })
})
