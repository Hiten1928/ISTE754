
// //Funcitionality to perform the ajax call for the tabs.
// jQuery.getInfo = function (orgID, tabName) {
//   return $.ajax({
//     type: "GET",
//     async: true,
//     url: proxy,
//     cache: false,
//     data: {
//       path: "/" + orgID + "/" + tabName
//     }
//   })
// }


//   (function ($) {
//     // jQuery plugin definition
//     $.fn.getInfo = function (orgID, tabName) {
//       return $.ajax({
//         type: "GET",
//         async: true,
//         url: proxy,
//         cache: false,
//         data: {
//           path: "/" + orgID + "/" + tabName
//         }
//       })
//     }
//   })(jQuery)

(function ($) {

  $.fn.getInfo = function (method) {

    var defaults = {
      orgID: '',
      tabName: ''
    };
    var settings = {}
    var methods = {
      init: function (options) {
        settings = $.extend({}, defaults, options)
        console.log(settings.orgID, settings.tabName)
        return $.ajax({
          type: "GET",
          async: true,
          url: proxy,
          cache: false,
          data: {
            path: "/" + settings.orgID + "/" + settings.tabName
          }
        })

      }
    }
    if (methods[method]) {

      // call the respective method
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

      // if an object is given as method OR nothing is given as argument
    } else if (typeof method === 'object' || !method) {

      // call the initialization method
      return methods.init.apply(this, arguments);

      // otherwise
    } else {

      // trigger an error
      $.error('Method "' + method + '" does not exist in pluginName plugin!');

    }
  }
})(jQuery);