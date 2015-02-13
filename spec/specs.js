describe("triangle", function(side1, side2, side3) {
  it("returns an error message if the given side lengths can't form a triangle", function() {
    expect(triangle(3, 5, 1)).to.equal("The side lengths you gave can't form a triangle!");
  });

  it("returns 'equilateral' if all three sides are of equal length", function() {
    expect(triangle(3, 3, 3)).to.equal("equilateral");
  });

  it("returns 'isosceles' if two of the sides are of equal length", function() {
    expect(triangle(9, 9, 7)).to.equal("isosceles");
  });

  it("returns 'scalene' if none of the sides are of equal length", function() {
    expect(triangle(9, 4, 7)).to.equal("scalene");
  });
});
