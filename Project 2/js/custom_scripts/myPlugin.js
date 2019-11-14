jQuery.getInfo = function(orgID, tabName) {
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
