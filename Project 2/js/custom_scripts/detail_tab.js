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

function getGeneralInfo(data, tabId) {
  console.log(data)
  let text = `<ul><li>${$('name', data).text()}</li></ul>`
  console.log(text)
  if ($($('#' + tabId)).children().length < 1 && !text.includes('null')) {
    $($('#' + tabId)).append(text)
  }
}

function getLocationInfo(data, tabId) {
  console.log('Location Data', data)
  let text = `<select id='${tabId}Select'>
    <option disabled="disabled">Select Location</option>`
  $('location', data).each(function() {
    text += `<option>${$('type', this).text()}</option>`
  })
  text += `</select>`
  if ($($('#' + tabId)).children().length < 1 && !text.includes('null')) {
    $($('#' + tabId)).append(text)
    selectListener(data)
  }
}

function getPeopleInfo(data, tabId) {
  console.log('People Data', data)
  console.log($('count', data).length)
  let text = `<select>`
  $('count', data).each(function() {
    text += `<option>${$('people', this).text()}</option></select>`
  })
}

function getTreatmentInfo(data, tabId) {
  console.log('Treatment Data', data)
  console.log($('count', data).length)
  let text = `<select>`
  $('count', data).each(function() {
    text += `<option>${$('location', this).text()}</option></select>`
  })
}
