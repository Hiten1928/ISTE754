$(document).ready(function() {
  ModModal.putModal()
  ModTabListen.tabListener()
  ModOrgTypes.getOrgtypes()
  ModCounty.getCounty()
  ModCities.getCities()

  $(document).ready(function() {
    var options = {
      minMargin: 5,
      maxMargin: 15,
      itemSelector: ".item",
      firstItemClass: "first-item"
    }
    $(".container").rowGrid(options)
  })
})
