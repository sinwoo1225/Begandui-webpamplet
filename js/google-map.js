// Initialize and add the map
function initMap() {
  // The location of Uluru
  const soundpresso_pos = { lat: 37.543374, lng: 126.722402 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: soundpresso_pos
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: soundpresso_pos, map: map });
}
