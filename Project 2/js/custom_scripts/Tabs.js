var modTabs = (function() {
  "use strict"
  return {
    getTabs: function(id) {
      if (id) {
        let output = ""
        $.ajax({
          type: "GET",
          async: true,
          url: proxy,
          cache: false,
          data: { path: "/Application/Tabs?orgId=" + id },
          success: function(data) {
            if ($(data).find("error").length !== 0) {
              output = "No tabs found"
            } else {
              //Creating wrapper div
              output += `<i class="close positive icon" style="color:white"></i><div role=${id} id=tabs><ul id=tabsUL>`
              $("row", data).each(function() {
                //Creating tabs list
                output += `<li class="ui approve"><a href='#${$(
                  "Tab",
                  this
                ).text()}'>${$("Tab", this).text()}</a></li>`
              })
              output += "</ul>"
              $("row", data).each(function() {
                //Creating placeholder text
                output += `<div id='${$(
                  "Tab",
                  this
                ).text()}'  class="field"></div>`
              })
              output += "</div>"
            }
            $("#divTabs").html(output)
            $("#divTabs [id=tabs]").tabs()
            $("#divTabs")
              .modal({
                className: {
                  active: "active",
                  scrolling: "scrolling"
                },
                selector: {
                  deny: ".actions .negative, .actions .deny, .actions .cancel"
                },
                closable: false,
                onApprove: function() {
                  console.log("closed")
                }
              })
              .modal("show")
            $(
              "#divTabs [id=tabs] [id=tabsUL] [aria-controls=General] a"
            ).trigger("click")
          }
        })
        return output
      }
    }
  }
})()
