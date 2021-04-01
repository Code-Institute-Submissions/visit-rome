function initMap() {
    // variable that store zoom level and coordinates
    var options = {
        zoom: 14,
        center: {
            lat: 41.902782,
            lng: 12.496366
        }
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



    // array of markers
    var markers = [{
        coords: {
            lat: 41.90135225699609,
            lng: 12.496885028954154
        }, // 41.90135225699609, 12.496885028954154 - Hotel Flower Garden
        category: 'hotel',
        name: 'Hotel Flower Garden',
        description: 'We are committed to offering a top quality level of service and comfort to our guests that exceeds our 3 star rating.',
        website: 'https://www.hotelflowergardenrome.com/',
    },
    {
        coords: {
            lat: 41.903540194120055,
            lng: 12.493172906843931
        }, // 41.903540194120055, 12.493172906843931 - Hotel Oceania
        category: 'hotel',
        name: 'Hotel Oceania', // remove h3
        description: 'Hotel Oceania Rome is an elegant hotel that offers great customer service and comfortable facilities in the heart of Rome.',
        website: 'https://www.hoteloceania.it/',
    },
    {
        coords: {
            lat: 41.9048177258281,
            lng: 12.500146775491771
        }, // 41.9048177258281, 12.500146775491771 - Hotel Windrose
        category: 'hotel',
        name: 'Hotel Windrose',
        description: 'The Hotel is placed in a strategic position in the heart of the town <br>and it is very close to the Termini Station and well linked to all the most interesting historical, artistic and commercial sites of the town.',
        website: 'https://www.hotelwindrose.com/en/',
    },
    {
        coords: {
            lat: 41.908123671239544,
            lng: 12.498108411416945
        }, // 41.908123671239544, 12.498108411416945 - Marcella Royal Hotel
        category: 'hotel',
        name: 'Marcella Royal Hotel', // and remove h3 tag
        description: 'The Marcella Royal Hotel is a first class boutique hotel conveniently situated in the centre of Rome.',
        website: 'https://www.marcellaroyalhotel.com/',
    },
    {
        coords: {
            lat: 41.908890284572934,
            lng: 12.493601935040736
        }, // 41.908890284572934, 12.493601935040736 - Romanico Palace Luxury Hotel & SPA
        category: 'hotel',
        name: 'Romanico Palace Luxury Hotel & SPA',
        description: 'Hotel Romanico Palace & Spa is located in the heart of the city centre, in the Via Veneto - Villa Borghese area,<br> near by the most important tourist attractions of the city.',
        website: 'https://www.hotelromanico.com/en/',
    },
    {
        coords: {
            lat: 41.90567478570767,
            lng: 12.502436441624294
        }, // 41.90567478570767, 12.502436441624294 - Trattoria "Al Camoscio D'Abruzzo"
        category: 'restaurants',
        name: 'Trattoria Al Camoscio D Abruzzo',
        description: 'Over the years the philosophy that makes our Trattoria unique has not changed, warmth, <br>hospitality, quality of raw materials have survived intact for decades. ',
        website: 'http://trattoria-roma.it/',
    },
    {
        coords: {
            lat: 41.90473267258463,
            lng: 12.500483592990138
        },  // 41.90473267258463, 12.500483592990138 -  La Famiglia
        category: 'restaurants',
        name: 'La Famiglia',
        description: 'Today the new generations continue the work of Antonio and Pietro trying to follow the principles for a healthy, simple and genuine cuisine.',
        website: 'https://www.lafamiglia.space/',
    },
    {
        coords: {
            lat: 41.906122290884134,
            lng: 12.495591195614683
        }, // 41.906122290884134, 12.495591195614683- Da Giovanni Restaurant Since 1948
        category: 'restaurants',
        name: 'Da Giovanni Restaurant Since 1948',
        description: 'The restaurant has a room reserved for banquets of 20 people. Respectable wine and liqueur list.',
        website: 'https://www.ristorantedagiovanniroma.it/',
    },
    {
        coords: {
            lat: 41.901274317475746,
            lng: 12.498221010452486
        }, // 41.901274317475746, 12.498221010452486 - Apotheke Cocktail Bar
        category: 'bars',
        name: 'Apotheke Cocktail Bar',
        description: 'The bar is located in the hotel, in the Termini train station district,<br> a strategic location to enjoy Rome by night.',
        website: 'https://www.welcomepiramhotel.com/it/cocktail-bar-roma/',
    },
    {
        coords: {
            lat: 41.90616086530456,
            lng: 12.502127568681882
        }, // 41.90616086530456, 12.502127568681882 - Julius Caesar Gurgustium
        category: 'bars',
        name: 'Julius Caesar Gurgustium',
        description: ' Pub Lounge, Cocktail & Dance Bar',
        website: 'https://www.juliuscaesar.it/',
    },
    {
        coords: {
            lat: 41.89983673142455,
            lng: 12.471657099280323
        }, // 41.89983673142455, 12.471657099280323 - La Botticella of Poggi Giovanni
        category: 'bars',
        name: 'La Botticella of Poggi Giovanni',
        description: 'La Botticella Wine Bar Pub Sports Bar Craft Beers',
        website: 'https://botticellapub.com/',
    },
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // add Marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords, // props are used to pass a parent component to a child component.
            map: map,
        });

        var infoWindow = new google.maps.InfoWindow({
            content: `
             <h6>${props.name}</h6>
             <p>${props.description}</p>
             <a href="${props.website}" target="_blank">Visite Website</a>
             `  // replace Brian : content: props.name
        });
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

        if (props.category === 'bars') {
            console.log("bars");
        } else if (props.category === 'restaurants') {
            console.log("restaurants");
        } else if (props.category === 'hotel') {
            console.log("hotels");

        }
    }

}
