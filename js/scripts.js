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


$(document).ready(function() {
  $("form#sides").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var result = triangle(side1, side2, side3)

    $("#result").text(result);

    event.preventDefault();
  });
});
