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

var remove = function remove(pathList) {
  console.log(pathList)
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

function createWin() {
  // url
  // name for the window
  // config for the window
  newWin = window.open(
    '',
    'myWin',
    'height=300,width=300,screenX=350,screenY=50'
  )
  newWin.document.write(`<h1 id='coolBeans' style='position:absolute;left:2px;'>
  Incompatble Browser, please switch to Chrome, Safari, Edge or IE11
  </h1>`)
}

var checkBrowser = function() {
  if (BrowserDetect.browser == 'Explorer') {
    var html = document.getElementsByTagName('html')[0]
    var body = document.getElementById('body')
    html.removeChild(body)
    createWin()
  }
}

checkBrowser()
