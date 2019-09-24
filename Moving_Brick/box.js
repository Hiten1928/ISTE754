let boxNative = document.getElementById(`basicBox`)
boxNative.setAttribute('style', 'left:5px;height:50px;width:50px')
let idtime
let currSpec = parseInt(boxNative.style.height) //one variable since its a square

// function to grow the box
let clickIt = function() {
  let temp = parseInt(boxNative.style.height) //to store the current height and width
  let finalheight = currSpec * 2
  //Closure to enable recursion call (Inspired from good parts)
  var move = function() {
    if (temp != finalheight) {
      temp += 5
      boxNative.style.height = temp + 'px'
      boxNative.style.width = temp + 'px'
    }
    setTimeout(move, 40)
  }
  currSpec = finalheight
  setTimeout(move, 40)
}

let slideIt = function() {
  let curPos = parseInt(boxNative.style.left)
  let newPos = curPos + 5
  boxNative.style.left = newPos + 'px'
  idtime = setTimeout(slideIt, 40)
}

boxNative.addEventListener(`click`, () => {
  clickIt()
})

let stop = function() {
  window.clearTimeout(idtime)
}
boxNative.addEventListener('mouseover', () => {
  slideIt()
})

boxNative.addEventListener('mouseleave', () => {
  stop()
})
