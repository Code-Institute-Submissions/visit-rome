$(document).ready(function() {
   $(".famous-places h2").html("Places you must see in Rome");
    $(".famous-places-p button").html("Read moere").css('background-color', 'blue');
   
    $("#btn-famous-one").click(function() {
    $("#p-famous-one").slideToggle(1000);
});
   
});

