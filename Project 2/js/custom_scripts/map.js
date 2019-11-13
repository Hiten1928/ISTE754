function populateMap(lat, longi) {
  if (parseFloat(lat) && parseFloat(longi))
    var map = L.map("map").setView([parseFloat(lat), parseFloat(longi)], 13)

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  L.marker([lat, longi])
    .addTo(map)
    .bindPopup("Here")
    .openPopup()
}
