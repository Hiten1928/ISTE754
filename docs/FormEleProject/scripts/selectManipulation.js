'use strict'

var createDropdown = function createDropdown(dataObj) {
  var keyArray = Object.keys(dataObj) //If there is no question then it means we reached the final answer

  if (keyArray.indexOf('question') == -1) {
    var finalDiv = displayResults(dataObj)
  } else {
    //set css for the div of the question
    var divEle = document.createElement('div')
    divEle.className = 'form-group select_dropdown' //Set the content for the label

    var labelEle = document.createElement('label')
    labelEle.className = 'control-label'
    labelEle.textContent = dataObj['question'] //set the select-option

    var selectEle = document.createElement('select')
    selectEle.className = 'form-control input-width'
    selectEle.options[0] = new Option('Select Preference')
    selectEle.options[0].disabled = true //Populate the drop downs

    for (var i = 0; i < keyArray.length - 1; i++) {
      selectEle.options[i + 1] = new Option(keyArray[i])
    }

    labelEle.appendChild(selectEle)
    divEle.appendChild(labelEle)
    divEle.setAttribute('id', divCount) //event listener on the select element

    addNewEventListener(selectEle) //Append the select to the DOM element

    mainDivEle.appendChild(divEle)
  }
}

var addNewEventListener = function addNewEventListener(ele) {
  ele.addEventListener(
    'change',
    function(e) {
      if (e.target.value == 'Select preference') {
        remove(pathArray)
      } else {
        var _pathArray = path.split('.')

        var parentId = parseInt(
          e.target.parentNode.parentNode.getAttribute('id')
        ) //Set the new choice and remove extra from path

        _pathArray[parentId] = e.target.value
        _pathArray = _pathArray.slice(0, parentId + 1).filter(function(f) {
          return f != ''
        }) //update the path

        divCount = parentId + 1
        path = _pathArray.join('.') //data of that choice

        var newData = getNestedObject(path) //removing the elements that are not present after the change in the path variable

        console.log(path)
        console.log(_pathArray)

        if (document.getElementById('dataDiv')) {
          remove(_pathArray)
        } else {
          removeIntermittent(_pathArray) //create the elements from the inner object data
        }

        createDropdown(newData)
      }
    },
    false
  )
} // Remove the elements from the dom
