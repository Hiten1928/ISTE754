// console.log(nameEle)
// console.log(phoneEle)
// console.log(ageEle)

function validateName() {
  let nameEle = document.getElementById('name')
  let value = nameEle.value
  let divEle = document.createElement('div')
  let strongEle = document.createElement('strong')
  divEle.appendChild(strongEle)
  divEle.textContent = 'Invalid format'
  divEle.className =
    //   let regex = new RegExp(`[a-zA-Z]`)
    console.log(parseInt(value))
  if (parseInt(value)) {
    nameEle.parentElement.firstElementChild = divEle
    nameEle.value = ''
    nameEle.focus()
  } else {
    console.log('do nothing')
  }
  cookies.setCookie('name', nameEle.value)
}

function validateAge() {
  let ageEle = document.getElementById('age')
  let valueAge = ageEle.value
  console.log('age', valueAge)
  console.log(typeof valueAge)
  if (parseInt(valueAge) && parseInt(valueAge) < 100) {
    console.log('Age is correct')
  } else {
    console.log('in else')
    let divEle = document.createElement('div')
    let strongEle = document.createElement('strong')
    divEle.appendChild(strongEle)
    divEle.textContent = 'Invalid format! Please Enter numbers'
    ageEle.value = ''
    ageEle.focus()
  }
  return false
}

function validatePhone() {
  let phoneEle = document.getElementById('phone')
  let valuePhone = phoneEle.value
  let divEle = document.createElement('div')
  let strongEle = document.createElement('strong')
  divEle.appendChild(strongEle)
  divEle.textContent = 'Invalid format'

  let regex = new RegExp('[0-9]{10}')
  console.log(regex.test(valuePhone))
  if (regex.test(valuePhone)) {
    console.log('Phone in correct format')
  } else {
    phoneEle.parentElement.firstElementChild = divEle
    phoneEle.value = ''
    phoneEle.focus()
  }
}
