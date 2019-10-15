let nameEle = document.getElementById('name')
let phoneEle = document.getElementById('phone')
let ageEle = document.getElementById('age')

// console.log(nameEle)
// console.log(phoneEle)
// console.log(ageEle)

function validateName() {
  let value = nameEle.value
  let divEle = document.createElement('div')
  let strongEle = document.createElement('strong')
  divEle.appendChild(strongEle)
  divEle.textContent = 'Invalid format'

  //   let regex = new RegExp(`[a-zA-Z]`)
  console.log(parseInt(value))
  if (!parseInt(value)) {
    console.log('do nothing')
  } else {
    nameEle.parentElement.firstElementChild = divEle
  }
  cookies.setCookie('name', nameEle.value)
}

function validateAge() {
  let valueAge = ageEle.value
  console.log(typeof valueAge)
  if (typeof valueAge === 'string') {
    let divEle = document.createElement('div')
    let strongEle = document.createElement('strong')
    divEle.appendChild(strongEle)
    divEle.textContent = 'Invalid format! Please Enter Alphabets'
  } else {
    console.log('age is correct')
  }
}

function validatePhone() {
  let valuePhone = phoneEle.value
  let divEle = document.createElement('div')
  let strongEle = document.createElement('strong')
  divEle.appendChild(strongEle)
  divEle.textContent = 'Invalid format'

  let regex = new RegExp('[0-9]{10}')
  console.log(regex.test(value))
  if (regex.test(value)) {
    console.log('name is correct')
  } else {
    nameEle.parentElement.firstElementChild = divEle
  }
}
