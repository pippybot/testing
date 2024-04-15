var map;
var infoWindow;
var currentLocation = 'Fort Worth';
var trafficLayer;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: 32.75361817256558, lng: -97.31959193117723 }, 
        zoom: 6
    });

    trafficLayer = new google.maps.TrafficLayer();

    // Markers for different locations
    var markers = {
        'UK': new google.maps.Marker({
            position: { lat: 55.391223530439646, lng: -2.591264406992628 },
            map,
            title: 'UK'
        }),
        'Fort Worth': new google.maps.Marker({
            position: { lat: 32.75361817256558, lng: -97.31959193117723 },
            map,
            title: 'Fort Worth'
        }),
        'Rowe Village': new google.maps.Marker({
            position: { lat: 41.83409469359984, lng: -87.62625439108541 },
            map,
            title: 'Rowe Village'
        })
    };

    // Info window for markers
    infoWindow = new google.maps.InfoWindow();

    document.getElementById('changeLocButton').addEventListener('click', function() {
        changeLocation();
    });

    document.getElementById('toggleLayersButton').addEventListener('click', function() {
        toggleLayers();
    });

    document.getElementById('showInfoButton').addEventListener('click', function() {
        showInfo(markers[currentLocation]);
    });
}

function changeLocation() {
    if (currentLocation === 'Fort Worth') {
        map.setCenter({ lat: 55.391223530439646, lng: -2.591264406992628 });
        currentLocation = 'UK';
    } else {
        map.setCenter({ lat: 32.75361817256558, lng: -97.31959193117723 });
        currentLocation = 'Fort Worth';
    }
}

function toggleLayers() {
    if (trafficLayer.getMap()) {
        trafficLayer.setMap(null);
    } else {
        trafficLayer.setMap(map);
    }
}

function showInfo(marker) {
    var contentString = '';
    if (marker.title === 'UK') {
        contentString = 'I went to the UK last in Summer of 2023 with my grandmother and my brother.';
    } else if (marker.title === 'Fort Worth') {
        contentString = 'This year for my birthday, I am going to a big gaming event for Rocket League.';
    } else if (marker.title === 'Rowe Village') {
        contentString = 'When I was studying on campus during the Fall 2023 semester, this is the dorm I stayed at.';
    }
    infoWindow.setContent(contentString);
    infoWindow.open(map, marker);
}
