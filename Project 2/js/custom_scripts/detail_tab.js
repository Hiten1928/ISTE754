//Module for populate data inside the each tab
//These functions are called when the event listener is fired up

var ModDetail = (function () {
  "use strict"

  return {
    // -------- Populate General Tab -----------
    getGeneralInfo: function (data, tabId) {
      let text = `<div class='ui card'><div class='content'>`
      //checking the values are null or not
      if ($("name", data).text() !== "null" || $("name", data).text() !== "") {
        text += `<p><strong>Name:  </strong>${$("name", data).text()}</p>`
      }
      if (
        $("description", data).text() !== "null" ||
        $("description", data).text() !== ""
      ) {
        text += `<p><strong>Description:  </strong>${$(
          "description",
          data
        ).text()}</p>`
      }
      if (
        $("email", data).text() !== "null" ||
        $("email", data).text() !== ""
      ) {
        text += `<p type='email'><strong>Email:  </strong>${$(
          "email",
          data
        ).text()}</p>`
      }
      if (
        $("website", data).text() !== "null" ||
        $("website", data).text().length
      ) {
        text += `<p><a target='_blank' href=' ${$(
          "website",
          data
        ).text()}'><strong>Website</strong></a></p>`
      }
      if (
        $("nummembers", data).text() !== "null" ||
        $("nummembers", data).text() !== ""
      ) {
        text += `<p><strong>Number of Members:  </strong>${$(
          "nummembers",
          data
        ).text()}</p>`
      }
      if (
        $("numcalls", data).text() !== "null" ||
        $("numcalls", data).text() !== ""
      ) {
        text += `<p><strong>Number of Calls:  </strong>${$(
          "numcalls",
          data
        ).text()}</p></div></div>`
      }

      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    },

    // -------- Populate Location Tab -----------

    //Generate a select menu based on the number of locations listed
    getLocationInfo: function (data, tabId) {
      let text = `<select id='${tabId}Select' class="ui approve fluid dropdown"> Location: 
      <option>Select Location</option>`
      $("location", data).each(function () {
        text += `<option site=${$("siteId", this).text()}>${$("type", this)
          .text()
          .toUpperCase()} - ${$("address1", this).text()}</option>`
      })
      text += `</select>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
        ModEventlisten.locationSelect(data)
      }
      return false
    },

    // -------- Populate People Tab -----------

    getPeopleInfo: function (data, tabId) {
      //Select menu for the people for their respective locations
      console.log('People', data)
      let text = ''
      if ($('count', data).text() !== 0) {
        text = `<select id='${tabId}Select' class="ui approve fluid dropdown"> Location: 
        <option>Select Location</option>`
        $("site", data).each(function () {
          text += `<option site="${$(this).attr("siteId")}">${$(this).attr(
            "address"
          )}</option>`
        })
        text += `</select>`
      } else {
        text = `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
        ModEventlisten.peopleSelect(data)
      }

    },

    // -------- Populate Treatment Tab -----------

    //The treatment population in the form of a table
    getTreatmentInfo: function (data, tabId) {
      console.log('treatment', data)
      console.log(typeof $('count', data))
      let text = ''
      if ($('count', data).text() !== '0') {
        text = `<table id='trainTable' class='ui celled padded table'><thead><tr><th class="single line">Type</th><th>Abbreviation</th></tr></thead>`
        $("treatment", data).each(function () {
          text += `<tr><td>${$("type", this).text()}</td>
      <td>${$("abbreviation", this).text()}</td></tr>`
        })
        text += `</table>`
      } else {
        text += `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    },

    // -------- Populate Training Tab -----------

    //The training info for the selected service in the form of a table
    getTrainingInfo: function (data, tabId) {
      console.log('training', data)
      let text = ''
      if ($('count', data).text() != '0') {
        text = `<table id='trainTable' class='ui celled padded table'><tr><thead><th class="single line">Type</th><th>Abbreviation</th></thead>`
        $("training", data).each(function () {
          text += `<tr><td>${$("type", this).text()}</td>
          <td>${$("abbreviation", this).text()}</td></tr>`
        })
        text += `</table>`
      } else {
        text += `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }

      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    },

    // -------- Populate Facilities Tab -----------

    //Populate the facilities information based on the data that has been populated
    getFacilitiesInfo: function (data, tabId) {
      console.log('facilities', data)
      let text = ''
      if ($('count', data).text() !== 0) {
        text = `<table id='facilityTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>Quantity</th><th>Description</th></thead>`
        $("facility", data).each(function () {
          text += `<tr><td>${$("type", this).text()}</td>
          <td>${$("quantity", this).text()}</td>
          <td>${$("description", this).text()}</td></tr>`
        })
        text += `</table>`
      } else {
        text += `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }

      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    },

    // -------- Populate Equipment Tab -----------

    getEquipmentInfo: function (data, tabId) {
      console.log('euip', data)
      let text = ''
      if ($('count', data).text() !== '0') {
        text = `<table id='equipTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>Quantity</th><th>Description</th></thead>`
        $("equipment", data).each(function () {
          text += `<tr><td>${$("type", this).text()}</td>
          <td>${$("quantity", this).text()}</td>
          <td>${$("description", this).text()}</td></tr>`
        })
        text += `</table>`
      } else {
        text += `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    },

    // -------- Populate Equipment Tab -----------

    //The names of the physicians and their respective hospital for the resective selection
    getPhysiciansInfo: function (data, tabId) {
      console.log('physician', data)
      let text = ''
      if ($('count', data).text() !== '0') {
        text = `<table id='physicianTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>License</th><th>Phone</th></thead>`
        $("physician", data).each(function () {
          text += `<tr>
          <td>${$("fName", this).text()} ${$("mName", this).text()} ${$(
            "lName",
            this
          ).text()}</td>
          <td>${$("license", this).text()}</td>
          <td>${$("phone", this).text()}</td>
          </tr>`
        })
      } else {
        text += `<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          We don't have any documents matching your query
        </div>
      </div>`
      }
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
}())
