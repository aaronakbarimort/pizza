// Business Logic
function Pizza(topping1) {
  this.cheese = topping1;
}

Pizza.prototype.pizzaOrder = function () {
  return this.cheese;
};


// User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputCheese = $("input#cheeseTopping").val();
    var newPizza = new Pizza(inputCheese);
    $("ul#pizzaList").append("<li>" + newPizza.pizzaOrder() + "</li>");
  });
});
