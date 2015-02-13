var triangle = function(side1, side2, side3) {
  var sides = [];
  sides.push(side1, side2, side3);
  sides.sort();

  if (sides[0] + sides[1] <= sides[2]) {
    return "The side lengths you gave can't form a triangle!";
  };

  if ((side1 === side2) && (side1 === side3)) {
    return "equilateral";
  };

  if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return "isosceles";
  };

  return "scalene";
}
