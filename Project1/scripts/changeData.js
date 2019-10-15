var changeData = function() {
  if (ajaxURL == 'data/sample.json') {
    console.log(mainDivEle, mainDivEle.firstElementChild)
    for (let i = 0; i < mainDivEle.childNodes.length; i++) {
      while (mainDivEle.lastElementChild) {
        mainDivEle.removeChild(mainDivEle.lastElementChild)
      }
    }
    ajaxURL = 'data/custom.json'
    divCount = 0
    loadJson('data/custom.json', callback)
  } else {
    for (let i = 1; i < mainDivEle.childNodes.length; i++) {
      while (mainDivEle.lastElementChild) {
        mainDivEle.removeChild(mainDivEle.lastElementChild)
      }
    }
    ajaxURL = 'data/sample.json'
    divCount = 0
    loadJson('data/sample.json', callback)
  }
}
