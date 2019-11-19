//AJAX call from the
const proxy = "https://people.rit.edu/dmgics/754/23/proxy.php"

//Get the organizations types on the page load. Module for the document.ready event listener
var ModOrgTypes = (function () {
  return {
    getOrgtypes: function () {
      $.ajax({
        type: "GET", //REQUEST type
        async: true, //non blocking response
        url: proxy,
        cache: false,
        data: { path: "/OrgTypes" },
        dataType: "xml", //content type of the response
        success: function (data, status) {
          let opts = ""

          if ($(data).find("error").length !== 0) {
            //if there is an error
          } else {
            opts += "<option value='' selected='selected' disabled>All Organization types</option>"
            $("row", data).each(function () {
              opts +=
                "<option value='" +
                $("type", this).text() +
                "'>" +
                $("type", this).text() +
                "</option>"
            })
            $("#orgType").html(opts)
          }
        }
      })
    }
  }
}())
