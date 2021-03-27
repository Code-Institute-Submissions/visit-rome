

// function initMap() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//         //   lat: -34.397, lng: 150.644
//         center: { lat: 41.902782, lng: 12.496366}, 
//         zoom: 11,
//     });

//     var labels = "ABCDEFGHIJKLMNOPRSTUVWXZ";

//     var locations = [

//         // 41.881897910343184, 12.464172553367087
//         // { lat: 40.785091, lng: -73.968285},
//         // { lat: 41.084045, lng: -73.874245 },
//         { lat: 41.80112362294129, lng: 12.493597818672233 },
//         { lat: 41.70112362294129, lng: 12.493597818672233 }
//     ];

//     var markers = locations.map(function (location, i) {
//         return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.lenght]
//         });
//     });

//      var markerCluster = new MarkerClusterer(map, markers, {
//                 imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
//             });

// }


function initMap() {
    // map options
    var options = {
        zoom: 8,
        center: {lat: 42.3601, lng: -71.0589}
    }
    // new map
    var map = new google.maps.Map(document.getElementById("map"), options);

    addMarker({lat: 42.3601, lng: -71.0589});
    addMarker({lat: 42.8584, lng: -70.9300});
    addMarker({lat: 42.7762, lng: -71.0773});

    // add marker function
    function addMarker(coords) {

        var marker = new google.maps.Marker({
            // {lat: 42.4668, lng: -70.9495}
        position:coords,
        map:map
    });

    }    

    /**
    // add marker
    var marker = new google.maps.Marker({
        position:{lat: 42.4668, lng: -70.9495},
        map:map
    });
    // add info window
    var infoWindow = new google.maps.InfoWindow({
        content: "<h1>Lynm MA</h1>"
    });
    // click on marker and open info window
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    
 */

}












