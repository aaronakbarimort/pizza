// Business Logic



// User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());

    $("#pizzaOrder").text(size);
  });
});
