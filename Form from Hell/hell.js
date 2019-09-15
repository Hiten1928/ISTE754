function tabAction(key) {}

//General function for creating a label
function createLabel(labelValue) {
  let generalLabel = document.createElement('label')
  if (labelValue) {
    generalLabel.innerHTML = 'So early to Heaven? huh!'
  } else {
    generalLabel.setAttribute('value', ' ')
  }
  return generalLabel
}
let firstNameEle = document.querySelector(`input[id="name"]`)
let firstNameLabelEle = document.getElementById('nameLabel')

//Validate name
function validateName() {
  let name = firstNameEle.value
  let divEle = document.getElementById(`nameDiv`)
  if (!(name === name.toUpperCase())) {
    alert(`Write it PROPERLY!`)
    firstNameEle.value = ''
    firstNameEle.focus()
    return false
  }
  let blankLabel = document.createElement('label')
  blankLabel.setAttribute('id', 'blank')
  blankLabel.setAttribute('value', '')
  firstNameLabelEle.replaceWith(blankLabel)
  firstNameEle.replaceWith(``)
  window.setTimeout(() => {
    let newLabel = document.getElementById('blank')
    let inputEle = document.createElement(`input`)

    //Dirty work of setting attribute!
    newLabel.innerHTML = 'NAME'
    newLabel.setAttribute(`class`, `mainLabel`)
    newLabel.setAttribute(`id`, `nameLabel`)
    newLabel.setAttribute(`for`, `name`)
    inputEle.setAttribute(`class`, `basicInfo`)
    inputEle.setAttribute(`id`, `name`)
    inputEle.setAttribute(`placeholder`, `Name Please duh!`)
    inputEle.setAttribute(`maxlength`, `20`)
    inputEle.setAttribute(`type`, `text`)
    inputEle.setAttribute(`autocomplete`, `addtional-name`)
    inputEle.setAttribute(`onchange`, `validateName()`)
    inputEle.setAttribute(`required`, ``)

    //Append the child
    inputEle.setAttribute(`value`, name)
    divEle.appendChild(inputEle)
  }, 3000)
}

//Validate Age
let ageEle = document.getElementById('age')
let ageLabelEle = document.getElementById('age_label')
function validateAge() {
  let age = ageEle.value
  if (isNaN(age)) {
    alert(`50RMAT check!`)
    ageEle.value = ''
    ageEle.focus()
    return false
  }
  if (!age) {
    alert('Were you just born? Give me your age!')
  } else if (age <= 18) {
    if (!confirm(`Go home kid. get a Driver's License first!`)) {
      alert('Dayumn! you are still Here! You got some steel')
    }
    ageEle.style.border = 'none'
  } else if (age > 18) {
    alert(`Welcome Home buddy, want a Beer?`)
  }
}

//Validate address
let addressEle = document.getElementsByName('basicInfo')
let addressLabelEle = document.getElementById('address_label')
function validateAddress() {
  addressEle.forEach(address => {
    switch (address.value) {
      case 'California':
        alert('WHAT! from beaches to hell 😱')
        let sure = confirm(`Are you sure?`)
        if (sure) {
          alert(`Good! That you finally made up your mind`)
        }
        break
      case 'New York':
        alert(`That's what happens when you follow Yankees! 😎`)
        let case2 = confirm(`Are you sure?`)
        if (case2) {
          alert(`Good! That you finally made up your mind`)
        }
        break
      case 'Virginia':
        alert(`Told Ya! this is better 💁`)
        let case3 = confirm(`Are you sure?`)
        if (case3) {
          alert(`Good! That you finally made up your mind`)
        }
        break
      case 'Washington':
        alert(`California is just round the corner, WHY HERE?`)
        let case4 = confirm(`Are you sure?`)
        if (case4) {
          alert(`Good! That you finally made up your mind`)
        }
        break
    }
  })
}

//Upon button clicking/ this is enrollment
let mainEle = document.getElementById('mainForm1')
function loading() {
  let btnEle = document.getElementById('submit')
  // mainEle.setAttribute('class', 'gif')
  mainEle.setAttribute(`class`, `mainShrink`)
}

//Radio button validation and Iteration
let mentorEle = document.getElementsByName('btn')
console.log(mentorEle.length)
for (let i = 0; i < mentorEle.length; i++) {
  console.log(mentorEle[i])
  mentorEle[i].addEventListener('click', () => {
    console.log(event.target)
    let decision = confirm('You actually need a mentor?')
    if (decision) {
      let decisionNestIf = confirm(
        `Eww! Didn't expect that to happen? Please think again`
      )
      if (decisionNestIf) {
        alert(
          `I knew its hard to make people understand! Anyways, now time to burn!`
        )
      } else {
        alert(`I thought you made up your mind`)
      }
    } else {
      alert(`Ohh you are a one man army! COOL`)
    }
    window.setTimeout(() => {
      mainEle.setAttribute('class', 'gif')
    }, 300)
  })
}

function validateReverse(month) {
  let monthArray = [
    `naJ`,
    `beF`,
    `raM`,
    `rpA`,
    `yaM`,
    `nuJ`,
    `luJ`,
    `guA`,
    `peS`,
    `tcO`
  ]
  return monthArray.includes(month) ? true : false
}

//Validate Date of Birth
let dobEle = document.getElementById(`dob`)
function validateDOB() {
  let dateRegex = new RegExp(`[0-9]{2}[-|\/]{1}[a-zA-z]{3}[-|\/]{1}[0-9]{2}`)
  let date = dobEle.value
  if (dateRegex.test(date)) {
    let dateString = date.split(`/`)
    if (validateReverse(dateString[1])) {
      console.log(dateString)
      console.log(`matched`)
      alert(`Dude you got it right the first time!`)
    } else {
      alert(`Seriously? Dates are taught in elementary!`)
      let decision = confirm(`Wanna try again?`)
      if (decision) {
        dobEle.value = ''
        dobEle.focus()
      } else {
        alert(`You are not privileged my Friend`)
        dobEle.value = ''
        dobEle.focus()
      }
    }
  } else {
    alert(`Type it right! `)
    dobEle.value = ''
    dobEle.focus()
    return false
  }
}
