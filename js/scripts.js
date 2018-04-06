// Business Logic



// User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var crust = parseInt($("#crust").val());
    var cheese = parseInt($("#cheese").val());
    var totalCost = size + crust + cheese;

    $("#pizzaOrder").text(totalCost);
  });
});
