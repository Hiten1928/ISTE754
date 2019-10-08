var data
var obj = new XMLHttpRequest()
var path = '' //variable to store the path with every choice
let mainDivEle = document.getElementById('mainDiv') //the root element in the DOM structure
let divCount = 0 //to maintain the id and path index update

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
  }
}

//Get the object to populate the drop down dynamically based on the choice
var getNestedObject = function(path) {
  let temp = data
  let pathValues = path.split('.')
  //filter to remove empty values from the array
  pathValues = pathValues.filter(val => {
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
  if (!keyArray.includes('question')) {
    //TODO display the final answer
  } else {
    let divEle = document.createElement('div')
    let labelEle = document.createElement('label')
    let selectEle = document.createElement('select')
    selectEle.options[0] = new Option('Select preference')
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
    mainDivEle.childNodes.forEach(node => {
      mainDivEle.appendChild(divEle)
    })
  }
}

var addNewEventListener = function(ele) {
  ele.addEventListener(
    'change',
    e => {
      if (e.target.value == 'Select preference') {
        //TODO default value
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
  if (allEle.length > pathList.length) {
    for (let i = pathList.length; i < allEle.length; i++) {
      console.log(allEle[i])
      allEle[i].remove()
    }
  }
}
