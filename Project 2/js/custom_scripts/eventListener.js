//Event Listener on tabs

var ModEventlisten = (function () {
  "use strict"

  //The event listeners for the tab population
  //And the AJAX calls for the tabs
  return {
    tabListener: function () {
      $("#divTabs").on(
        "click",
        "#tabs [role=tablist] [role=tab] a",
        function () {
          let id = $("#divTabs")
            .find("#tabs")
            .attr("role")
          switch ($(this).text()) {
            //General tab ajax call            
            case "General":
              let promise = $.getInfo(id, $(this).text())
              promise.success(function (data) {
                ModDetail.getGeneralInfo(data, "General")
              })
              break
            //Locations tab ajax call            
            case "Locations":
              let promiseLoc = $.getInfo(id, $(this).text())
              promiseLoc.success(function (data) {
                ModDetail.getLocationInfo(data, "Locations")
              })
              break
            //People tab ajax call
            case "People":
              let promisePeople = $.getInfo(id, $(this).text())
              promisePeople.success(function (data) {
                ModDetail.getPeopleInfo(data, "People")
              })
              break
            //Treatment tab ajax call
            case "Treatment":
              let promiseTreatment = $.getInfo(id, "Treatments")
              promiseTreatment.success(function (data) {
                ModDetail.getTreatmentInfo(data, "Treatment")
              })
              break
            //Training tab ajax call
            case "Training":
              let promiseTraining = $.getInfo(id, "Training")
              promiseTraining.success(function (data) {
                ModDetail.getTrainingInfo(data, "Training")
              })
              break
            //Facilities tab ajax call
            case "Facilities":
              let promiseFacilities = $.getInfo(id, "Facilities")
              promiseFacilities.success(function (data) {
                ModDetail.getFacilitiesInfo(data, "Facilities")
              })
              break
            //Equipment tab ajax call
            case "Equipment":
              let promiseEquipment = $.getInfo(id, "Equipment")
              promiseEquipment.success(function (data) {
                ModDetail.getEquipmentInfo(data, "Equipment")
              })
              break
            //Physicians tab ajax call
            case "Physicians":
              let promisePhysicians = $.getInfo(id, "Physicians")
              promisePhysicians.success(function (data) {
                ModDetail.getPhysiciansInfo(data, "Physicians")
              })
              break
          }
          return false
        }
      )
    },

    //Event listener for the counties based on the state selected
    getCounty: function () {
      $("#state").on("change", function (event) {
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
          //On success of the ajax call to the server and counties are returned
          success: function (data) {
            let options = `<option value='' selected="selected" disabled>All Counties</option>`
            $("row", data).each(function () {
              options += `<option value='${$("CountyName", this).text()}'>${$(
                "CountyName",
                this
              ).text()}</option>`
            })

            $("#counties").html(options)
          }
        })
      })
    },

    // ------------- Populate state based on the county ------------

    getCities: function () {
      $("#state").on("change", function (event) {
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
          success: function (data) {
            let options = `<option value='' selected="selected" disabled>All Cities</option>`
            $("row", data).each(function () {
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
    },

    // ------------------ Event Listener for Location --------------

    locationSelect: function (data) {
      $("#divTabs [id=tabs] [id=Locations] [id=LocationsSelect").on(
        "change",
        function (event) {
          if (event.target.value !== "Select Location") {
            let text = `<table id='locTable' class='ui celled padded table'><tr><thead><th>Address</th><th>State</th><th>City</th><th>County</th><th>Zip</th><th>Phone</th><th>Fax</th><th>Latitude</th><th>Longitude</th></thead>`
            let locData = {}
            let currLocation = $(this)
              .children("option:selected")
              .attr("site")

            $("location", data).each(function () {
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
    },

    // -------------------- Details of the specific Training ---------

    peopleSelect: function (data) {
      $("#divTabs [id=tabs] [id=People] [id=PeopleSelect").on(
        "change",
        function () {
          let text = `<table id='peopleTable' class='ui celled padded table'><tr><thead><th>Name</th><th>Role</th></thead>`
          let currSelection = $(this)
            .children("option:selected")
            .attr("site")
          let peepData = {}
          $("site", data).each(function () {
            if ($(this).attr("siteId") === currSelection) {
              peepData = $(this)
            }
          })

          $("person", peepData).size()

          $("person", peepData).each(function () {
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
}())
