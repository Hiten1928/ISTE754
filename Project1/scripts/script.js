var data
var obj = new XMLHttpRequest()
var path = '' //variable to store the path with every choice
let mainDivEle = document.getElementById('password') //the root element in the DOM structure
let resultDivEle = document.getElementsByClassName('panelWrapper')
let divCount = 0 //to maintain the id and path index update
var count = 0
const isChrome = window.navigator.userAgent.indexOf('Chrome') >= 0,
  isFirefox = window.navigator.userAgent.indexOf('Firefox') >= 0,
  isSafari = window.navigator.userAgent.indexOf('Safari') >= 0

//Function for AJAX Call and fetch the data
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

loadJson('data/sample.json', callback)

//Callback to parse json and trigger the dropdown when the page renders
function callback(response) {
  data = JSON.parse(response)
  if (data) {
    createDropdown(data)
    checkBrowser()
  }
}

//Get the object to populate the drop down dynamically based on the choice
var getNestedObject = function(path) {
  let temp = data
  let pathValues = path.split('.')
  //filter to remove empty values from the array
  pathValues = pathValues.filter(function(val) {
    return val != ''
  })

  //fetch the object from the path
  for (let i = 0; i <= pathValues.length - 1; i++) {
    if (!pathValues == '') {
      temp = temp[pathValues[i]]
    }
  }
  return temp
}

var createDropdown = function(dataObj) {
  let keyArray = Object.keys(dataObj)
  //If there is no question then it means we reached the final answer
  if (keyArray.indexOf('question') == -1) {
    console.log(keyArray.indexOf('question'))
    finalDiv = displayResults(dataObj)
    console.log(finalDiv)
  } else {
    //set css for the div of the question
    let divEle = document.createElement('div')
    divEle.className = 'form-group fadeInDown'

    //Set the content for the label
    let labelEle = document.createElement('label')
    labelEle.className = 'control-label'
    labelEle.textContent = dataObj['question']

    //set the select-option
    let selectEle = document.createElement('select')
    selectEle.className = 'form-control input-width'
    selectEle.options[0] = new Option('Select Preference')
    selectEle.options[0].disabled = true

    //Populate the drop downs
    for (let i = 0; i < keyArray.length - 1; i++) {
      selectEle.options[i + 1] = new Option(keyArray[i])
    }

    labelEle.appendChild(selectEle)
    divEle.appendChild(labelEle)
    divEle.setAttribute('id', divCount)

    //event listener on the select element
    addNewEventListener(selectEle)
    //Append the select to the DOM element
    mainDivEle.appendChild(divEle)
  }
}

var addNewEventListener = function(ele) {
  ele.addEventListener(
    'change',
    e => {
      if (e.target.value == 'Select preference') {
        remove(pathArray)
      } else {
        let pathArray = path.split('.')
        let parentId = parseInt(
          e.target.parentNode.parentNode.getAttribute('id')
        )
        //Set the new choice and remove extra from path
        pathArray[parentId] = e.target.value
        pathArray = pathArray.slice(0, parentId + 1).filter(f => {
          return f != ''
        })
        //update the path
        divCount = parentId + 1
        path = pathArray.join('.')
        //data of that choice
        let newData = getNestedObject(path)
        //removing the elements that are not present after the change in the path variable
        remove(pathArray)
        //create the elements from the inner object data
        createDropdown(newData)
      }
    },
    false
  )
}

// Remove the elements from the dom
var remove = function(pathList) {
  let allEle = document.querySelectorAll('label')
  let dataDivEle = document.getElementById('dataDiv')
  if (allEle.length > pathList.length) {
    for (let i = pathList.length; i < allEle.length; i++) {
      allEle[i].remove()
      dataDivEle !== null ? dataDivEle.remove() : console.log('nothing bro')
    }
  }
}

var changeData = function() {
  let dataEle = document.getElementById('data')
  dataEle.addEventListener('click', e => {
    loadJson('data/custom.json', data)
  })
}

var displayResults = function(finalChoice) {
  console.log(finalChoice)
  let aEle = document.createElement('a')
  let nodeEle = document.createElement('div')
  let nodeLabelEle = document.createElement('label')

  nodeEle.id = 'dataDiv'

  //Add DHTML class with fadeInDown
  nodeEle.className = 'jumbotron fadeInDown'
  nodeLabelEle.textContent = finalChoice.text
  aEle.href = finalChoice.link
  aEle.target = '_blank'
  aEle.data_toggle = 'tooltip'
  aEle.title = 'Click to know more'

  nodeEle.appendChild(nodeLabelEle)
  aEle.appendChild(nodeEle)
  resultDivEle[0].appendChild(aEle)
}
