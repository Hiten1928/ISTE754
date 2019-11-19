
// All the document ready functions call like the orgType
//rowGrid plugin initialization
//Event listeners for the counties and cities
$(document).ready(function () {
  ModModal.putModal()
  ModEventlisten.tabListener()
  ModOrgTypes.getOrgtypes()
  ModEventlisten.getCounty()
  ModEventlisten.getCities()

  $(document).ready(function () {
    var options = {
      minMargin: 5,
      maxMargin: 15,
      itemSelector: ".item",
      firstItemClass: "first-item"
    }
    $(".container").rowGrid(options)
  })
})
