'use strict'

var data
var obj = new XMLHttpRequest()
var path = '' //variable to store the path with every choice
var dataType
var ajaxURL = 'data/sample.json'
var changeDataType = false

var mainDivEle = document.getElementById('password') //the root element in the DOM structure

var resultDivEle = document.getElementsByClassName('panelWrapper')
var divCount = 0 //to maintain the id and path index update

var count = 0 //Function for AJAX Call and fetch the data

function loadJson(url, callback) {
  obj.open('GET', url, true)
  obj.setRequestHeader('Application', 'json')

  obj.onreadystatechange = function() {
    if (obj.readyState === 4 && obj.status === 200) {
      callback(obj.responseText)
    }
  }

  obj.send()
}

loadJson(ajaxURL, callback) //Callback to parse json and trigger the dropdown when the page renders

function callback(response) {
  data = JSON.parse(response)

  if (data) {
    createDropdown(data)
  }
} //Get the object to populate the drop down dynamically based on the choice

var getNestedObject = function getNestedObject(path) {
  var temp = data
  var pathValues = path.split('.') //filter to remove empty values from the array

  pathValues = pathValues.filter(function(val) {
    return val != ''
  }) //fetch the object from the path

  for (var i = 0; i <= pathValues.length - 1; i++) {
    if (!pathValues == '') {
      temp = temp[pathValues[i]]
    }
  }

  return temp
}

var createDropdown = function createDropdown(dataObj) {
  var keyArray = Object.keys(dataObj) //If there is no question then it means we reached the final answer

  if (keyArray.indexOf('question') == -1) {
    var finalDiv = displayResults(dataObj)
  } else {
    //set css for the div of the question
    var divEle = document.createElement('div')
    divEle.className = ' form-group fadeInDown' //Set the content for the label

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

var remove = function remove(pathList) {
  console.log(pathList)
  var allEle = document.querySelectorAll('label')
  var dataDivEle = document.getElementById('dataDiv')

  if (allEle.length >= pathList.length) {
    for (var i = pathList.length; i < allEle.length; i++) {
      allEle[i].remove()
      dataDivEle !== null ? dataDivEle.remove() : console.log('nothing bro')
    }
  }
}

var displayResults = function displayResults(finalChoice) {
  console.log(finalChoice)
  var aEle = document.createElement('a')
  var nodeEle = document.createElement('div')
  var nodeLabelEle = document.createElement('label')
  nodeEle.id = 'dataDiv' //Add DHTML class with fadeInDown

  nodeEle.className = 'jumbotron fadeInDown'
  nodeLabelEle.textContent = finalChoice.text
  aEle.href = finalChoice.link
  aEle.target = '_blank'

  nodeEle.appendChild(nodeLabelEle)
  aEle.appendChild(nodeEle)
  resultDivEle[0].appendChild(aEle)
}

var checkBrowser = function() {
  if (BrowserDetect.browser == 'Explorer') {
    alert('Incompatible browser - switch to Chrome, Firefox or Safari')
    var html = document.getElementsByTagName('html')[0]
    var body = document.getElementById('body')
    html.removeChild(body)
  }
}

checkBrowser()
