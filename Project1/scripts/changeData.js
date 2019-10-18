'use strict'

var changeData = function changeData() {
  if (ajaxURL == 'data/sample.json') {
    console.log(mainDivEle, mainDivEle.firstElementChild)

    for (var i = 0; i < mainDivEle.childNodes.length; i++) {
      while (mainDivEle.lastElementChild) {
        mainDivEle.removeChild(mainDivEle.lastElementChild)

        if (document.getElementById('dataDiv')) {
          document
            .getElementById('dataDiv')
            .parentNode.removeChild(document.getElementById('dataDiv'))
        }
      }
    }

    ajaxURL = 'data/custom.json'
    divCount = 0
    loadJson('data/custom.json', callback)
  } else {
    for (var _i = 1; _i < mainDivEle.childNodes.length; _i++) {
      while (mainDivEle.lastElementChild) {
        mainDivEle.removeChild(mainDivEle.lastElementChild)

        if (document.getElementById('dataDiv')) {
          document
            .getElementById('dataDiv')
            .parentNode.removeChild(document.getElementById('dataDiv'))
        }
      }
    }

    ajaxURL = 'data/sample.json'
    divCount = 0
    loadJson('data/sample.json', callback)
  }
}
