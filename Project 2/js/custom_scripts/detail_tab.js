// -------- Populate General Tab -----------
// var ModPopulateTab = (function(){
// return {

// }
// })()
var ModGeneral = (function() {
  return {
    getGeneralInfo: function(data, tabId) {
      let text = ``
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
        ).text()}</p>`
      }

      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()

// -------- Populate Location Tab -----------

var ModLocation = (function() {
  return {
    getLocationInfo: function(data, tabId) {
      let text = `<select id='${tabId}Select' class="ui approve fluid dropdown"> Location: 
      <option>Select Location</option>`
      $("location", data).each(function() {
        text += `<option site=${$("siteId", this).text()}>${$("type", this)
          .text()
          .toUpperCase()} - ${$("address1", this).text()}</option>`
      })
      text += `</select>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
        ModLocationSelect.locationSelect(data)
      }
      return false
    }
  }
})()

// -------- Populate People Tab -----------
var ModPeople = (function() {
  return {
    getPeopleInfo: function(data, tabId) {
      console.log(data)
      let text = `<select id='${tabId}Select' class="ui approve fluid dropdown"> Location: 
    <option>Select Location</option>`
      $("site", data).each(function() {
        text += `<option site="${$(this).attr("siteId")}">${$(this).attr(
          "address"
        )}</option>`
      })
      text += `</select>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
        ModPeopleSelect.peopleSelect(data)
      }
    }
  }
})()

// -------- Populate Treatment Tab -----------

var ModTreatment = (function() {
  return {
    getTreatmentInfo: function(data, tabId) {
      let text = `<table id='trainTable' class='ui celled padded table'><thead><tr><th class="single line">Type</th><th>Abbreviation</th></tr></thead>`
      $("treatment", data).each(function() {
        text += `<tr><td>${$("type", this).text()}</td>
      <td>${$("abbreviation", this).text()}</td></tr>`
      })
      text += `</table>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()

// -------- Populate Training Tab -----------

var ModTraining = (function() {
  return {
    getTrainingInfo: function(data, tabId) {
      let text = `<table id='trainTable' class='ui celled padded table'><tr><thead><th class="single line">Type</th><th>Abbreviation</th></thead>`
      $("training", data).each(function() {
        text += `<tr><td>${$("type", this).text()}</td>
        <td>${$("abbreviation", this).text()}</td></tr>`
      })
      text += `</table>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()

// -------- Populate Facilities Tab -----------

var ModFacilities = (function() {
  return {
    getFacilitiesInfo: function(data, tabId) {
      let text = `<table id='facilityTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>Quantity</th><th>Description</th></thead>`
      $("facility", data).each(function() {
        text += `<tr><td>${$("type", this).text()}</td>
        <td>${$("quantity", this).text()}</td>
        <td>${$("description", this).text()}</td></tr>`
      })
      text += `</table>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()

// -------- Populate Equipment Tab -----------

var ModEquip = (function() {
  return {
    getEquipmentInfo: function(data, tabId) {
      let text = `<table id='equipTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>Quantity</th><th>Description</th></thead>`
      $("equipment", data).each(function() {
        text += `<tr><td>${$("type", this).text()}</td>
        <td>${$("quantity", this).text()}</td>
        <td>${$("description", this).text()}</td></tr>`
      })
      text += `</table>`
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()

// -------- Populate Equipment Tab -----------

var ModPhysicians = (function() {
  return {
    getPhysiciansInfo: function(data, tabId) {
      let text = `<table id='physicianTable' class='ui celled padded table'><tr><thead><th class="single line">Name</th><th>License</th><th>Phone</th></thead>`
      $("physician", data).each(function() {
        text += `<tr>
        <td>${$("fName", this).text()} ${$("mName", this).text()} ${$(
          "lName",
          this
        ).text()}</td>
        <td>${$("license", this).text()}</td>
        <td>${$("phone", this).text()}</td>
        </tr>`
      })
      if ($($("#" + tabId)).children().length < 1) {
        $($("#" + tabId)).append(text)
      }
    }
  }
})()
