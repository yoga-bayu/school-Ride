function initMap() {
    const initialPosition = { lat: -6.200000, lng: 106.816666 }; // Koordinat awal (contoh Jakarta)

    const map = new google.maps.Map(document.getElementById('map'), {
        center: initialPosition,
        zoom: 13
    });

    const marker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function(event) {
        document.getElementById('latitude').value = event.latLng.lat();
        document.getElementById('longitude').value = event.latLng.lng();
    });
}

window.onload = initMap;
