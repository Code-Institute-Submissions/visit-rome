function initMap() {
    // variable that store zoom level and coordinates
    var options = {
        zoom: 10,
        center: {lat:  41.902782, lng: 12.496366}
    };
    // new map called by id
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    // add marker
    var marker = new google.maps.Marker({
        // 41.90135225699609, 12.496885028954154 - Hotel Flower Garden
        position:{lat: 41.90135225699609, lng: 12.496885028954154},
        map:map,
    });

    // add info window
    var infoWindow = new google.maps.InfoWindow({
        content: '<h2>Hotel Flower Garden</h2>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}