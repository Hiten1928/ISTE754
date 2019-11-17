//Event Listener on tabs

var ModTabListen = (function() {
  "use strict"

  return {
    tabListener: function() {
      $("#divTabs").on(
        "click",
        "#tabs [role=tablist] [role=tab] a",
        function() {
          let id = $("#divTabs")
            .find("#tabs")
            .attr("role")
          switch ($(this).text()) {
            case "General":
              let promise = $.getInfo(id, $(this).text())
              promise.success(function(data) {
                ModGeneral.getGeneralInfo(data, "General")
              })
              break
            case "Locations":
              let promiseLoc = $.getInfo(id, $(this).text())
              promiseLoc.success(function(data) {
                ModLocation.getLocationInfo(data, "Locations")
              })
              break
            case "People":
              let promisePeople = $.getInfo(id, $(this).text())
              promisePeople.success(function(data) {
                ModPeople.getPeopleInfo(data, "People")
              })
              break
            case "Treatment":
              let promiseTreatment = $.getInfo(id, "Treatments")
              promiseTreatment.success(function(data) {
                ModTreatment.getTreatmentInfo(data, "Treatment")
              })
              break
            case "Training":
              let promiseTraining = $.getInfo(id, "Training")
              promiseTraining.success(function(data) {
                ModTraining.getTrainingInfo(data, "Training")
              })
              break
            case "Facilities":
              let promiseFacilities = $.getInfo(id, "Facilities")
              promiseFacilities.success(function(data) {
                ModFacilities.getFacilitiesInfo(data, "Facilities")
              })
              break
            case "Equipment":
              let promiseEquipment = $.getInfo(id, "Equipment")
              promiseEquipment.success(function(data) {
                ModEquip.getEquipmentInfo(data, "Equipment")
              })
              break
            case "Physicians":
              let promisePhysicians = $.getInfo(id, "Physicians")
              promisePhysicians.success(function(data) {
                ModPhysicians.getPhysiciansInfo(data, "Physicians")
              })
              break
          }
          return false
        }
      )
    }
  }
})()

// ------------- Populate state based on the county ------------

var ModCounty = (function() {
  "use strict"
  return {
    getCounty: function() {
      $("#state").on("change", function(event) {
        $.ajax({
          type: "GET",
          async: true,
          url: proxy,
          data: {
            path:
              "/Counties?state=" +
              $(this)
                .children("option:selected")
                .val()
          },
          success: function(data) {
            let options = `<option value=''>All Counties</option>`
            $("row", data).each(function() {
              options += `<option value='${$("CountyName", this).text()}'>${$(
                "CountyName",
                this
              ).text()}</option>`
            })

            $("#counties").html(options)
          }
        })
      })
    }
  }
})()

// ------------- Populate the cities on the basis of state ------------

var ModCities = (function() {
  "use strict"

  return {
    getCities: function() {
      $("#state").on("change", function(event) {
        $.ajax({
          type: "GET",
          async: true,
          url: proxy,
          data: {
            path:
              "/Cities?state=" +
              $("#state")
                .children("option:selected")
                .val()
          },
          success: function(data) {
            let options = `<option value=''>All Cities</option>`
            $("row", data).each(function() {
              options += `<option value='${$("city", this).text()}'>${$(
                "city",
                this
              ).text()}</option>`
            })
            console.log(options)
            // if ($("#cities").length > 2) {

            // }
            $("#cities").empty()
            $("#cities").append(options)
          }
        })
      })
    }
  }
})()

// ------------------ Event Listener for Location --------------
var ModLocationSelect = (function() {
  return {
    locationSelect: function(data) {
      $("#divTabs [id=tabs] [id=Locations] [id=LocationsSelect").on(
        "change",
        function(event) {
          if (event.target.value !== "Select Location") {
            let text = `<table id='locTable' class='ui celled padded table'><tr><thead><th>Address</th><th>State</th><th>City</th><th>County</th><th>Zip</th><th>Phone</th><th>Fax</th><th>Latitude</th><th>Longitude</th></thead>`
            let locData = {}
            let currLocation = $(this)
              .children("option:selected")
              .attr("site")

            $("location", data).each(function() {
              if ($("siteId", this).text() === currLocation) {
                locData = $(this)
              }
            })
            text += `<tr>
            <td>${$("address1", locData).text()} ${$(
              "address2",
              locData
            ).text()}</td>
            <td>${$("state", locData).text()}</td>
            <td>${$("city", locData).text()}</td>
            <td>${$("countyName", locData).text()}</td>
            <td>${$("zip", locData).text()}</td>
            <td>${$("phone", locData).text()}</td>
            <td>${$("fax", locData).text()}</td>
            <td>${$("latitude", locData).text()}</td>
            <td>${$("longitude", locData).text()}</td>
                    </tr>`
            text += `</table><div id='map' class=''></div>`
            if ($("#locTable", this)) {
              $("#divTabs [id=tabs] [id=Locations] #map").remove()
              $("#locTable").remove()
            }
            $("#divTabs [id=tabs] [id=Locations]").append(text)
            ModMap.populateMap(
              $("latitude", locData).text(),
              $("longitude", locData).text()
            )
          } else {
            $("#divTabs [id=tabs] [id=Locations] #map").remove()
            $("#locTable").remove()
          }
          return false
        }
      )
    }
  }
})()

// -------------------- Details of the specific Training ---------

var ModPeopleSelect = (function() {
  return {
    peopleSelect: function(data) {
      $("#divTabs [id=tabs] [id=People] [id=PeopleSelect").on(
        "change",
        function() {
          let text = `<table id='peopleTable' class='ui celled padded table'><tr><thead><th>Name</th><th>Role</th></thead>`
          let currSelection = $(this)
            .children("option:selected")
            .attr("site")
          let peepData = {}
          $("site", data).each(function() {
            if ($(this).attr("siteId") === currSelection) {
              peepData = $(this)
            }
          })

          $("person", peepData).size()

          $("person", peepData).each(function() {
            text += `<td>${$("honorific", this).text()}. ${$(
              "fName",
              this
            ).text()} ${$("lName", this).text()}</td>
          <td>${$("role", this).text()}</td>`
          })

          text += `</table>`
          if ($("#peopleTable")) {
            $("#peopleTable").remove()
          }
          $("#divTabs [id=tabs] [id=People]").append(text)
          return false
        }
      )
    }
  }
})()
