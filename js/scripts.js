// Business Logic
function Pizza(size) {
  this.size = size;
}

// User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var crust = parseInt($("#crust").val());
    var cheese = parseInt($("#cheese").val());
    var sauce = parseInt($("#sauce").val());
    var meat = parseInt($("#meat").val());
    var veggie = parseInt($("#veggie").val());
    var totalCost = size + crust + cheese + sauce + meat + veggie;

    $("#pizzaOrder").text(totalCost);
  });
});
