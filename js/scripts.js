// back-end
  var ounces = function (number1) {
    return number1 * 28.3495;
  };

  var gallons = function(number1) {
    return number1 * 3.7854;
  };

  var cups = function(number1) {
    return number1 * 4;
  };



// front end
$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#ounces").val());
    var result = ounces(number1);
    $(".output1").text(result + " ounces");
  });

    $("form#form2").submit(function(event){
      event.preventDefault();
      var number1 = parseInt($("#gallons").val());
      var result = gallons(number1);
      $(".output2").text(result + " gallons");
    });

    $("form#form3").submit(function(event){
      event.preventDefault();
      var number1 = parseInt($("#cups").val());
      var result = cups(number1);
      $(".output3").text(result + " cups");
    });


});
