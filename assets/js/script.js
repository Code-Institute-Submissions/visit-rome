$(document).ready(function () {
    $(".famous-places h2").html("Places you must see in Rome");
    $(".famous-places-p button").html("Read more").css('background-color', 'blue');

    $("#btn-famous-one").click(function () {
        $("#p-famous-one").slideToggle("slow").text(`Trevi Fountain is the most beautiful fountain in Rome. Measuring some 20 meters in width by 26 meters in height, Trevi Fountain is also the largest fountain in the city.

The origins of the fountain go back to the year 19 B.C., in which period the fountain formed the end of the Aqua Virgo aqueduct. The first fountain was built during the Renaissance, under the direction of Pope Nicholas V.

The final appearance of the Trevi Fountain dates from 1762 when after many years of works at the hand of Nicola Salvi, it was finalized by Giuseppe Pannini.

Interestingly enough, the name of Trevi derives from Tre Vie (three ways), since the fountain was the meeting point of three streets.`);   // fadeIn(3000)  slideToggle(1000)
    });

    $("#btn-famous-two").click(function () {
        $("#p-famous-two").slideToggle("slow").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum praesentium perspiciatis repellendus esse facilis ut, non autem corrupti repudiandae alias quasi saepe labore eveniet dolore fugiat nostrum? Aut, architecto ullam?");
    });

    $("#btn-famous-three").click(function () {
        $("#p-famous-three").slideToggle("slow").text("LThe Colosseum is an oval amphitheatre in the centre of the city of Rome and is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age. Construction began under the emperor Vespasian in 72 and was completed in AD 80 under his successor and heir, Titus. Further modifications were made during the reign of Domitian. The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre by later classicists and archaeologists for its association with their family name (Flavius).");
    });

});

