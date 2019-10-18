'use strict'

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

function validateName() {
  var nameEle = document.getElementById('name')
  var value = nameEle.value
  var divEle = document.createTextNode('Name field cannot be empty or a number')
  var pEle = document.createElement('p')
  pEle.appendChild(divEle)
  pEle.className = 'error'
  console.log(value)

  if (parseInt(value)) {
    nameEle.parentNode.appendChild(pEle)
    nameEle.value = ''
    nameEle.focus()
    return false
  } else {
    localStorage.setItem('name', value)
    console.log('do nothing')
  }
}

function validateAge() {
  var ageEle = document.getElementById('age')
  var valueAge = ageEle.value
  console.log('age', valueAge)
  console.log(_typeof(valueAge))

  if (parseInt(valueAge) && parseInt(valueAge) < 100) {
    localStorage.setItem('age', valueAge)
    console.log('Age is correct')
  } else {
    console.log('in else')
    var divEle = document.createElement('div')
    var strongEle = document.createElement('strong')
    divEle.appendChild(strongEle)
    divEle.textContent = 'Invalid format! Please Enter numbers'
    ageEle.value = ''
    ageEle.focus()
    return false
  }
}

function validatePhone() {
  var phoneEle = document.getElementById('phone')
  var valuePhone = phoneEle.value
  var divEle = document.createElement('div')
  var strongEle = document.createElement('strong')
  divEle.appendChild(strongEle)
  divEle.textContent = 'Invalid format'
  var regex = new RegExp('[0-9]{10}')
  console.log(regex.test(valuePhone))

  if (regex.test(valuePhone)) {
    localStorage.setItem('phone', valuePhone)
    console.log('Phone in correct format')
  } else {
    phoneEle.parentElement.firstElementChild = divEle
    phoneEle.value = ''
    phoneEle.focus()
    return false
  }
}
