$(document).ready(function() {
  
  $("form#age").submit(function(event) {
  const age=parseInt($("input#user-age").val());
  event.preventDefault();

  if (age>=18) {
    $("#over-18").show(1000);
    $("#under-18").hide(1000);
  } else {
    
    $("#over-18").hide(1000);
    $('#under-18').show(1000);
    

    alert("Sorry you're not old enough!");
    
  }

  });
});