// -------- Get tab Data -----------

function getInfo(orgID, tabName) {
  return $.ajax({
    type: "GET",
    async: true,
    url: proxy,
    cache: false,
    data: {
      path: "/" + orgID + "/" + tabName
    }
  })
}

// -------- Populate General Tab -----------

function getGeneralInfo(data, tabId) {
  let text = `<ul>`
  if ($("name", data).text() !== "null" || $("name", data).text() !== "") {
    text += `<li><strong>Name:  </strong>${$("name", data).text()}</li>`
  }
  if (
    $("description", data).text() !== "null" ||
    $("description", data).text() !== ""
  ) {
    text += `<li><strong>Description:  </strong>${$(
      "description",
      data
    ).text()}</li>`
  }
  if ($("email", data).text() !== "null" || $("email", data).text() !== "") {
    text += `<li type='email'><strong>Email:  </strong>${$(
      "email",
      data
    ).text()}</li>`
  }
  if (
    $("website", data).text() !== "null" ||
    $("website", data).text().length
  ) {
    text += `<li><a target='_blank' href=' ${$(
      "website",
      data
    ).text()}'><strong>Website</strong></a></li>`
  }
  if (
    $("nummembers", data).text() !== "null" ||
    $("nummembers", data).text() !== ""
  ) {
    text += `<li><strong>Number of Members:  </strong>${$(
      "nummembers",
      data
    ).text()}</li>`
  }
  if (
    $("numcalls", data).text() !== "null" ||
    $("numcalls", data).text() !== ""
  ) {
    text += `<li><strong>Number of Calls:  </strong>${$(
      "numcalls",
      data
    ).text()}</li></ul>`
  }

  if ($($("#" + tabId)).children().length < 1) {
    $($("#" + tabId)).append(text)
  }
}

// -------- Populate Location Tab -----------

function getLocationInfo(data, tabId) {
  let text = `<select id='${tabId}Select' class="form-control-sm"> Location: 
    <option>Select Location</option>`
  $("location", data).each(function() {
    text += `<option site=${$("siteId", this).text()}>${$("type", this)
      .text()
      .toUpperCase()} - ${$("address1", this).text()}</option>`
  })
  text += `</select>`
  if ($($("#" + tabId)).children().length < 1) {
    $($("#" + tabId)).append(text)
    locationSelect(data)
  }
}

// -------- Populate People Tab -----------

function getPeopleInfo(data, tabId) {
  let text = `<select id='${tabId}Select' class="form-control-sm"> Location: 
  <option>Select Location</option>`
  $("site", data).each(function() {
    text += `<option site="${$(this).attr("siteId")}">${$(this).attr(
      "address"
    )}</option>`
  })
  text += `</select>`
  if ($($("#" + tabId)).children().length < 1) {
    $($("#" + tabId)).append(text)
    peopleSelect(data)
  }
}

// -------- Populate Treatment Tab -----------

function getTreatmentInfo(data, tabId) {
  let text = `<table id='trainTable' class='table'><tr><thead class='thead-dark'><th>Type</th><th>Abbreviation</th></thead>`
  $("treatment", data).each(function() {
    text += `<tr><td>${$("type", this).text()}</td>
    <td>${$("abbreviation", this).text()}</td></tr>`
  })
  text += `</table>`
  if ($($("#" + tabId)).children().length < 1) {
    $($("#" + tabId)).append(text)
  }
}

// -------- Populate Training Tab -----------

function getTrainingInfo(data, tabId) {
  let text = `<table id='trainTable' class='table'><tr><thead class='thead-dark'><th>Type</th><th>Abbreviation</th></thead>`
  $("training", data).each(function() {
    text += `<tr><td>${$("type", this).text()}</td>
    <td>${$("abbreviation", this).text()}</td></tr>`
  })
  text += `</table>`
  if ($($("#" + tabId)).children().length < 1) {
    $($("#" + tabId)).append(text)
  }
}

// -------- Populate Facilities Tab -----------

function getFacilitiesInfo(data, tabId) {
  let text = `<table id='facilityTable' class='table'><tr><thead class='thead-dark'><th>Name</th><th>Quantity</th><th>Description</th></thead>`
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

// -------- Populate Equipment Tab -----------

function getEquipmentInfo(data, tabId) {
  let text = `<table id='equipTable' class='table'><tr><thead class='thead-dark'><th>Name</th><th>Quantity</th><th>Description</th></thead>`
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

// -------- Populate Equipment Tab -----------

function getPhysiciansInfo(data, tabId) {
  let text = `<table id='physicianTable' class='table'><tr><thead class='thead-dark'><th>Name</th><th>License</th><th>Phone</th></thead>`
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
