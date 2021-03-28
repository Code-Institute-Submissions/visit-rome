function initMap() {
    // variable that store zoom level and coordinates
    var options = {
        zoom: 10,
        center: {lat:  41.902782, lng: 12.496366}
    };
    // new map called by id
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    /**

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

     */
    
    addMarker({lat: 41.90135225699609, lng: 12.496885028954154});  // 41.90135225699609, 12.496885028954154 - Hotel Flower Garden
    addMarker({lat:41.903540194120055, lng: 12.493172906843931}); // 41.903540194120055, 12.493172906843931 - Hotel Oceania
    addMarker({lat: 41.9048177258281, lng: 12.500146775491771}); // 41.9048177258281, 12.500146775491771 - Hotel Windrose
    addMarker({lat: 41.908123671239544, lng: 12.498108411416945}); // 41.908123671239544, 12.498108411416945 - Marcella Royal Hotel
    addMarker({lat: 41.908890284572934, lng: 12.493601935040736}); // 41.908890284572934, 12.493601935040736 - Romanico Palace Luxury Hotel & SPA

    // add Marker function
    function addMarker(coordinates) {
         var marker = new google.maps.Marker({
        position: coordinates,
        map:map,
    });
    }
}