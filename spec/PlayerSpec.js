
describe("Player", function() {
  var player;

  beforeEach(function(){
    player = new Player('X')
  })

  it("returns player name", function(){
    expect(player.name()).toEqual('X')
  })
})
