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
            getPeopleInfo(data, 'People')
          })
          break
        case 'Treatment':
          let promiseTreatment = getInfo(id, 'Treatments')
          promiseTreatment.success(function(data) {
            getTreatmentInfo(data, 'Treatment')
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
  let text = `<table id='locTable'><tr><th>Address</th><th>City</th><th>State</th><th>City</th><th>Zip</th><th>Phone</th><th>Fax</th>`
  $('#divTabs [id=tabs] [id=Locations] [id=LocationsSelect').on(
    'change',
    function(event) {
      console.log('eventListener', data)
      console.log(
        $(this)
          .children('option:selected')
          .val()
      )

      let currLocation = $(this)
        .children('option:selected')
        .attr('site')
      let locData = {}
      $('location', data).each(function() {
        if ($('siteId', this).text() === currLocation) {
          locData = $(this)
        }
      })
      console.log(locData)
      text += `<tr><td>${$('address1', locData).text()}</td>
      <td>${$('city', locData).text()}</td>
      <td>${$('zip', locData).text()}</td>
      <td>${$('state', locData).text()}</td>
      </tr>`
      text += '</table>'
      if (document.getElementById('locTable')) {
        console.log(text)
        document.getElementById('locTable').remove()
        $('#divTabs [id=tabs] [id=Locations]').append(text)
      } else {
        $('#divTabs [id=tabs] [id=Locations]').append(text)
      }
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
          options += `<option value='${$('CountyName', this).text()}'>${$(
            'CountyName',
            this
          ).text()}</option>`
        })

        $('#counties').html(options)
      }
    })
  })
}

function getCities() {
  $('#state').on('change', function(event) {
    $.ajax({
      type: 'GET',
      async: true,
      url: proxy,
      data: {
        path:
          '/Cities?state=' +
          $('#state')
            .children('option:selected')
            .val()
      },
      success: function(data) {
        console.log(data)
        let options = `<option value=''>All Cities</option>`
        $('row', data).each(function() {
          console.log($)
          options += `<option value=''>${$('city', this).text()}</option>`
        })

        $('#cities').append(options)
      }
    })
  })
}
