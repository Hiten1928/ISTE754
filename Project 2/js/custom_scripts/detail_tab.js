// -------- Get tab Data -----------

function getInfo(orgID, tabName) {
  return $.ajax({
    type: 'GET',
    async: true,
    url: proxy,
    cache: false,
    data: {
      path: '/' + orgID + '/' + tabName
    }
  })
}

// -------- Populate General Tab -----------

function getGeneralInfo(data, tabId) {
  console.log(data)
  let text = `<ul>`
  if ($('name', data).text() !== 'null' || $('name', data).text() !== '') {
    text += `<li><strong>Name:  </strong>${$('name', data).text()}</li>`
  }
  if (
    $('description', data).text() !== 'null' ||
    $('description', data).text() !== ''
  ) {
    text += `<li><strong>Description:  </strong>${$(
      'description',
      data
    ).text()}</li>`
  }
  if ($('email', data).text() !== 'null' || $('email', data).text() !== '') {
    text += `<li type='email'><strong>Email:  </strong>${$(
      'email',
      data
    ).text()}</li>`
  }
  if (
    $('website', data).text() !== 'null' ||
    $('website', data).text().length
  ) {
    text += `<li><a href=' ${$(
      'website',
      data
    ).text()}'><strong>Website</strong></a></li>`
  }
  if (
    $('nummembers', data).text() !== 'null' ||
    $('nummembers', data).text() !== ''
  ) {
    text += `<li><strong>Number of Members:  </strong>${$(
      'nummembers',
      data
    ).text()}</li>`
  }
  if (
    $('numcalls', data).text() !== 'null' ||
    $('numcalls', data).text() !== ''
  ) {
    text += `<li><strong>Number of Calls:  </strong>${$(
      'numcalls',
      data
    ).text()}</li></ul>`
  }

  console.log(text)
  if ($($('#' + tabId)).children().length < 1) {
    $($('#' + tabId)).append(text)
  }
}

// -------- Populate Location Tab -----------

function getLocationInfo(data, tabId) {
  console.log('Location Data', data)
  let text = `<select id='${tabId}Select'>
    <option>Select Location</option>`
  $('location', data).each(function() {
    text += `<option site=${$('siteId', this).text()}>${$(
      'type',
      this
    ).text()}</option>`
  })
  text += `</select>`
  if ($($('#' + tabId)).children().length < 1) {
    $($('#' + tabId)).append(text)
    selectListener(data)
  }
}

// -------- Populate People Tab -----------

function getPeopleInfo(data, tabId) {
  console.log('People Data', data)
  console.log($('siteCount', data).length)
  let text = `<select>`
  $('site', data).each(function() {
    text += `<option>${$(this).attr('siteType')}</option>`
  })
  text += `</select>`
  console.log($($('#' + tabId)))
  if ($($('#' + tabId)).children().length < 1 && !text.includes('null')) {
    $($('#' + tabId)).append(text)
    selectListener(data)
  }
}

// -------- Populate Treatment Tab -----------

function getTreatmentInfo(data, tabId) {
  console.log('Treatment Data', data)
  console.log($('count', data).length)
  let text = `<select>`
  $('count', data).each(function() {
    text += `<option>${$('treatment', this).text()}</option></select>`
  })

  if ($($('#' + tabId)).children().length < 1 && !text.includes('null')) {
    $($('#' + tabId)).append(text)
    selectListener(data)
  }
}
