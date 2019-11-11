function getTabs(id) {
  let output = ''
  $.ajax({
    type: 'GET',
    async: true,
    url: proxy,
    cache: false,
    data: { path: '/Application/Tabs?orgId=' + id },
    success: function(data) {
      if ($(data).find('error').length !== 0) {
        output = 'No tabs found'
      } else {
        //Creating wrapper div
        output += `<div role=${id} id=tabs><ul id=tabsUL>`
        $('row', data).each(function() {
          //Creating tabs list
          output += `<li><a href='#${$('Tab', this).text()}'>${$(
            'Tab',
            this
          ).text()}</a></li>`
        })
        output += '</ul>'
        $('row', data).each(function() {
          //Creating placeholder text
          output += `<div id='${$('Tab', this).text()}'></div>`
        })
        output += '</div>'
      }
      $('#divTabs').html(output)
      $('#divTabs [id=tabs]').tabs()
      $('#divTabs').modal()
      $('#divTabs [id=tabs] [id=tabsUL] [aria-controls=General] a').trigger(
        'click'
      )
    }
  })
  return output
}
