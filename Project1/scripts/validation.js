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
