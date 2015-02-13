function sortNumber(a,b) {
  return a - b;
}

var triangle = function(side1, side2, side3) {
  var sides = [];
  sides.push(side1, side2, side3);
  sides.sort(sortNumber);

  if ((isNaN(side1) === true) || (isNaN(side2) === true) || (isNaN(side3) === true)) {
    return "You've gotta actually put some numbers in there, silly goose!";
  } else if (sides[0] + sides[1] <= sides[2]) {
    return "The side lengths you gave can't form a triangle!";
  } else if ((side1 === side2) && (side1 === side3)) {
    return "Equilateral";
  } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return "Isosceles";
  } else if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) {
    return "Scalene";
  } else {
    return "There was an unexpected error. Great job for finding it!";
  };
}


$(document).ready(function() {
  $("form#sides").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var result = triangle(side1, side2, side3)

    $("#result").text(result);

    $(".equilateral").hide();
    $(".isosceles").hide();
    $(".scalene").hide();
    $(".not-a-triangle").hide();
    $(".silly-goose").hide();

    if (result === "Equilateral") {
      $(".equilateral").show();
    } else if (result === "Isosceles") {
      $(".isosceles").show();
    } else if (result === "Scalene") {
      $(".scalene").show();
    } else if (result === "The side lengths you gave can't form a triangle!") {
      $(".not-a-triangle").show();
    } else {
      $(".silly-goose").show();
    };

    $(".result").show();

    event.preventDefault();
  });
});
