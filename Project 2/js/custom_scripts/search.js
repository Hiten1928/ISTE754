function checkSearch() {
  $.ajax({
    url: proxy,
    data: {
      path: "/Organizations?" + $("#search-form").serialize()
    },
    success: function(data) {
      let output = ""

      // if($(data).find('row'))
      if ($("row", data).length === 0) {
        output = "No matches found"
      } else {
        output = `<table id = 'results-table' class='tablesorter tablesorter-blue'>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>County</th>
                        <th>State</th>
                        <th>Zip</th>
                      </tr>
                    </thead>`
        $("row", data).each(function() {
          output += `<tr id = 'orgRow' rel="modal:open" href="#divTabs">
                        <td>${$(this)
                          .find("type")
                          .text()}</td>
                        <td style="display:none;">${$(
                          "OrganizationID",
                          this
                        ).text()}</td>
                        <td>${$("Name", this).text()}</td>
                        <td>${$("Email", this).text()}</td>
                        <td>${$("city", this).text()}</td>
                        <td>${$("CountyName", this).text()}</td>
                        <td>${$("State", this).text()}</td>
                        <td>${$("zip", this).text()}</td>
                      </tr>`
        })

        output += "</table>"
      }
      $("#tableOutput").html(output)

      $("#results-table").tablesorter({
        //logic for sorting
        headers: {
          2: { sorter: false }
        }
      })
    }
  })
}

var ModModal = (function() {
  return {
    putModal: function() {
      $("#tableOutput").on("click", "#results-table tr", function(event) {
        var tableData = $(this)
          .children("td")
          .map(function() {
            return $(this).text()
          })
          .get()
        modTabs.getTabs(tableData[1])
      })
    }
  }
})()
