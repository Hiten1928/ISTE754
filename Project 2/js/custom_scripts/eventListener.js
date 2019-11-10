//Event listener to populate the divs
$(document).ready(function() {
  //Get the tab in the created tab list
  function tabListener() {
    $('#divTabs').on('click', '#tabs [role=tablist] [role=tab] a', function() {
      let id = $('#divTabs')
        .find('#tabs')
        .attr('role')
      switch ($(this).text()) {
        case 'General':
          let promise = getInfo(id, $(this).text())
          promise.success(function(data) {
            getGeneralInfo(data, 'General')
          })
          break
        case 'Locations':
          let promiseLoc = getInfo(id, $(this).text())
          promiseLoc.success(function(data) {
            getLocationInfo(data, 'Locations')
          })
          break
        case 'People':
          let promisePeople = getInfo(id, $(this).text())
          promisePeople.success(function(data) {
            getPeopleInfo(data, 'Locations')
          })
          break
        case 'Treatment':
          let promiseTreatment = getInfo(id, $(this).text())
          promiseTreatment.success(function(data) {
            getTreatmentInfo(data, 'Locations')
          })
          break
      }
    })
  }

  tabListener()
  getCounty()
  getCities()
})

function selectListener(data) {
  $('#divTabs [id=tabs] [id=Locations] [id=LocationsSelect').on(
    'change',
    function(event) {
      console.log(data)
      console.log(event)
    }
  )
}

function getCounty() {
  $('#state').on('change', function(event) {
    $.ajax({
      type: 'GET',
      async: true,
      url: proxy,
      data: {
        path:
          '/Counties?state=' +
          $(this)
            .children('option:selected')
            .val()
      },
      success: function(data) {
        console.log(data)
        let options = `<option value=''>All Counties</option>`
        $('row', data).each(function() {
          console.log($)
          options += `<option value='${$('CountyName', this)
            .text()
            .toLowerCase()}'>${$('CountyName', this).text()}</option>`
        })

        $('#counties').html(options)
      }
    })
  })
}

function getCities() {
  $('#counties').on('change', function(event) {
    $.ajax({
      type: 'GET',
      async: true,
      url: proxy,
      data: {
        path:
          '/Cities?state=' +
          $('#state')
            .children('option:selected')
            .val() +
          '&county=' +
          $(this)
            .children('option:selected')
            .val()
      },
      success: function(data) {
        console.log(data)
        let options = `<option value=''>All Cities</option>`
        $('row', data).each(function() {
          console.log($)
          options += `<option value=''>${$('CountyName', this).text()}</option>`
        })

        $('#cities').append(options)
      }
    })
  })
}
