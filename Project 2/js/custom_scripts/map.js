//Populate the map based on the latitude and longitude of coming from the data
var ModMap = (function () {
  return {
    populateMap: function (lat, longi) {
      if (parseFloat(lat) && parseFloat(longi))
        var map = L.map("map").setView([parseFloat(lat), parseFloat(longi)], 13)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      //Get the marker and populate the map and add it to the div.
      L.marker([lat, longi])
        .addTo(map)
        .bindPopup("Here")
        .openPopup()
    }
  }
}())
