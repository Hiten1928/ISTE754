'use strict'

//change the data when teh switch button is hit
var changeData = function changeData() {
  if (ajaxURL == 'data/sample.json') {
    for (var i = 0; i < mainDivEle.childNodes.length; i++) {
      while (mainDivEle.lastElementChild) {
        //Remove all the ele from the DOM
        mainDivEle.removeChild(mainDivEle.lastElementChild)
        if (document.getElementById('dataDiv')) {
          document
            .getElementById('dataDiv')
            .parentNode.removeChild(document.getElementById('dataDiv'))
        }
      }
    }

    //Change the AJAX url back to the other one for infinte toggle ability
    ajaxURL = 'data/custom.json'
    divCount = 0
    loadJson('data/custom.json', callback)
  } else {
    for (var _i = 1; _i < mainDivEle.childNodes.length; _i++) {
      while (mainDivEle.lastElementChild) {
        //Remove all the ele from the DOM
        mainDivEle.removeChild(mainDivEle.lastElementChild)
        if (document.getElementById('dataDiv')) {
          document
            .getElementById('dataDiv')
            .parentNode.removeChild(document.getElementById('dataDiv'))
        }
      }
    }

    //Change the AJAX url back to the other one for infinte toggle ability
    ajaxURL = 'data/sample.json'
    divCount = 0
    loadJson('data/sample.json', callback)
  }
}
