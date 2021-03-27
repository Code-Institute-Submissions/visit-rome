

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        //   lat: -34.397, lng: 150.644
        center: { lat: 41.902782, lng: 12.496366}, 
        zoom: 11,
    });

    var labels = "ABCDEFGHIJKLMNOPRSTUVWXZ";

    var locations = [

        // 41.881897910343184, 12.464172553367087
        // { lat: 40.785091, lng: -73.968285},
        // { lat: 41.084045, lng: -73.874245 },
        { lat: 41.80112362294129, lng: 12.493597818672233 },
        { lat: 41.70112362294129, lng: 12.493597818672233 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.lenght]
        });
    });

     var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

}















