//delete and populate

var data
var obj = new XMLHttpRequest()
var path = ''
let mainDivEle = document.getElementById('mainDiv')
let divCount = 0

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

function callback(response) {
  data = JSON.parse(response)
  if (data) {
    createDropdown(data)
  }
}

var getNestedObject = function(path) {
  let temp = data
  let pathValues = path.split('.')
  console.log('pathValues', pathValues)
  for (let i = 0; i < pathValues.length - 1; i++) {
    if (!pathValues == '') {
      temp = temp[pathValues[i]]
    }
  }
  return temp
}

var createDropdown = function(dataObj) {
  let keyArray = Object.keys(dataObj)
  if (!keyArray.includes('question')) {
    console.log(dataObj)
  } else {
    let divEle = document.createElement('div')
    let labelEle = document.createElement('label')
    let selectEle = document.createElement('select')
    selectEle.options[0] = new Option('Select preference')

    for (let i = 0; i < keyArray.length - 1; i++) {
      selectEle.options[i + 1] = new Option(keyArray[i])
    }

    labelEle.appendChild(selectEle)
    divEle.appendChild(labelEle)
    divEle.setAttribute('id', divCount)
    divCount += 1

    addNewEventListener(labelEle)

    mainDivEle.childNodes.forEach(node => {
      if (node.tagName == 'DIV' && node.id == divCount) {
        document.getElementById(id).replaceChild(node, divEle)
      } else {
        mainDivEle.appendChild(divEle)
      }
    })
  }
}

var addNewEventListener = function(ele) {
  ele.addEventListener(
    'change',
    e => {
      let pathArray = path.split('.')
      let parentId = parseInt(e.target.parentNode.parentNode.getAttribute('id'))
      pathArray[parentId] = e.target.value
      pathArray = pathArray.slice(0, parentId + 1)
      console.log(pathArray)
      path = pathArray.join('' + '.') + '.'
      let newData = getNestedObject(path)
      let allEle = document.querySelectorAll('label')
      if (allEle.length > pathArray.length)
        for (let i = pathArray.length; i < allEle.length; i++) {
          console.log(allEle[i])
          allEle[i].remove()
        }
      createDropdown(newData)
    },
    false
  )
}

// let temp1
// if (keyValue == '') {
//   return dataObj1
// }
// for (obj in dataObj1) {
//   if (obj != null && typeof dataObj1[obj] == 'object') {
//     if (obj == keyValue) {
//       temp1 = dataObj1[obj]
//       return temp1
//     } else {
//       getNestedObject(keyValue, dataObj1[obj])
//     }
//   } else {
//     if (typeof dataObj1[obj] !== 'object') {
//       if (obj == keyValue) {
//         temp1 = dataObj1[obj]
//         return temp1
//       }
//     }
//     //the last node is reached
//     console.log('open up the final choice')
//   }
// }

// var display finalText

// function createSelect(data, path) {
//   let divEle = document.createElement('div')
//   let selectEle = document.createElement('select')
//   let keys = Object.keys(data)

//   // let tempData = path
//   // console.log(path)

//   divEle.setAttribute('style', 'color:green')
//   divEle.setAttribute('class', 'questiondiv')
//   divEle.textContent = data.question
//   // selectEle.id = 'selectedstyle'
//   for (let i = 0; i < keys.length - 1; i++) {
//     let option = document.createElement('option')
//     option.value = keys[i]
//     option.text = keys[i]
//     selectEle.appendChild(option)
//   }

//   document.activeElement.addEventListener(
//     'change',
//     function() {
//       selectedItem()
//     },
//     false
//   )
//   // selectEle.options[0] = new Option('-')
//   divEle.appendChild(selectEle)
//   document.body.appendChild(divEle)
// }

// function selectedItem() {
//   let optionEle = document.activeElement
//   let choice = optionEle.options[optionEle.selectedIndex].textContent
//   path += '.' + choice
//   console.log(path)
//   let nestedObject = getNestedObject(data, choice)
//   console.log(nestedObject)
//   let tempData = Object.entries(nestedObject)
//   console.log(tempData)
//   tempData.forEach(temp => {
//     console.log(temp)
//     if (temp[0] === choice || temp[1] === choice) {
//       console.log('in if')
//       if (data[choice].hasOwnProperty('question')) createSelect(temp[choice])
//     } else {
//       tempData = Object.entries(data[choice])
//     }
//   })
//   localStorage.setItem('choice', choice)
// }
// function getNestedObject(alldata, key) {
//   let setOfKeys = Object.keys(alldata)
//   if (setOfKeys.includes(key)) {
//     return alldata[key]
//   } else {
//     // temp = getNestedObject(data[key], key)
//   }
