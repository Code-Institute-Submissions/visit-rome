$(document).ready(function () {
    $(".famous-places h2").html("Places you must see in Rome");
    $(".famous-places-p button").html("Read more").css('background-color', 'blue');

    $("#btn-famous-one").click(function () {
        $("#p-famous-one").slideDown("slow").text("What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?");   // fadeIn(3000)  slideToggle(1000)
    });

    $("#btn-famous-two").click(function () {
        $("#p-famous-two").slideToggle("slow").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum praesentium perspiciatis repellendus esse facilis ut, non autem corrupti repudiandae alias quasi saepe labore eveniet dolore fugiat nostrum? Aut, architecto ullam?");
    });

    $("#btn-famous-three").click(function () {
        $("#p-famous-three").slideToggle("slow").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum praesentium  perspiciatis repellendus esse facilis ut, non autem corrupti repudiandae alias quasi saepe  labo eveniet dolore fugiat nostrum ? Aut, architecto ullam ?");
    });

});

