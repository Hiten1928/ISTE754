//Remove function when at least one choice has been made
var remove = function remove(pathList) {
  var allEle = document.querySelectorAll('label')
  var dataDivEle = document.getElementById('dataDiv')

  if (allEle.length >= pathList.length) {
    console.log('pathList', pathList.length)
    console.log('allEle', allEle)

    for (var i = pathList.length + 1; i < allEle.length; i++) {
      console.log(allEle[i])
      var temp = allEle[i]
      allEle[i].parentNode.removeChild(temp)
      dataDivEle !== null
        ? dataDivEle.parentNode.removeChild(dataDivEle)
        : console.log('nothing bro')
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
      var tempI = allEleI[i]
      allEleI[i].parentNode.removeChild(tempI)
      dataDivEleI !== null
        ? dataDivEleI.parentNode.removeChild(dataDivEleI)
        : console.log('no final answer')
    }
  }
}
