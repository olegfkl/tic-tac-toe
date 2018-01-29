
describe('Square', function() {
  var square;

  beforeEach(function() {
    square = new Square(1)
  });

  it("returns its number", function() {
     expect(square.number()).toEqual(1)
  })
})
