
//Funcitionality to perform the ajax call for the tabs.
jQuery.getInfo = function (orgID, tabName) {
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
