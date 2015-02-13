describe("triangle", function(side1, side2, side3) {
  it("returns an error message if the given side lengths can't form a triangle", function() {
    expect(triangle(3, 5, 1)).to.equal("The side lengths you gave can't form a triangle!");
  });


});
