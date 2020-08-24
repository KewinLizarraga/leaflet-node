const map = L.map("map-template").setView([-12.0551637, -77.0802424], 13); // [latitud, longitud], zoom;

const socket = io();

const tileUrl =
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

L.tileLayer(tileUrl, { attribution }).addTo(map);

map.locate({ enableHighAccuracy: true });
map.on("locationfound", (e) => {
  L.marker([e.latitude, e.longitude]).addTo(map).bindPopup("-_-").openPopup();
  socket.emit("userCoordinates", e.latlng);
});

socket.on("newUserCoordinates", (coords) => {
  L.marker([coords.lat + 0.1, coords.lng + 0.1])
    .addTo(map)
    .bindPopup("Otro aqui")
    .openPopup();
});

const iconCharmander = L.icon({
  iconUrl: "img/point.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-10, -100],
});

L.marker([-12.052721, -77.05732], { icon: iconCharmander })
  .addTo(map)
  .bindPopup("Charmander en Breña<br> <small>[-12.052721, -77.057320]</small>")
  .openPopup();

const iconSquirtle = L.icon({
  iconUrl: "img/squirtle.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-10, -100],
});

L.marker([-12.076291, -77.053243], { icon: iconSquirtle })
  .addTo(map)
  .bindPopup("Squirtle<br> <small>[-12.052721, -77.057320]</small>")
  .openPopup();
