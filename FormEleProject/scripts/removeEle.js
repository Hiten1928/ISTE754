//Remove function when at least one choice has been made
var remove = function remove(pathList) {
  var allEle = document.querySelectorAll('label')
  var dataDivEle = document.getElementById('dataDiv')

  if (allEle.length >= pathList.length) {
    console.log('pathList', pathList.length)
    console.log('allEle', allEle)

    for (var i = pathList.length + 1; i < allEle.length; i++) {
      allEle[i].remove()
      dataDivEle !== null ? dataDivEle.remove() : console.log('nothing bro')
    }
  }
}

//remove elements when the user
var removeIntermittent = function removeIntermittent(pathListI) {
  var allEleI = document.querySelectorAll('label')
  var dataDivEleI = document.getElementById('dataDiv')

  if (allEleI.length >= pathListI.length) {
    console.log('pathList', pathListI.length)
    console.log('allEle', allEleI)

    for (var i = pathListI.length; i < allEleI.length; i++) {
      allEleI[i].remove()
      dataDivEleI !== null
        ? dataDivEleI.remove()
        : console.log('no final answer')
    }
  }
}
