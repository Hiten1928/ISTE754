'use strict'

function recentSearch() {
  var recentEle = document.createElement('div')
  var pEle = document.createElement('p')
  var aEle = document.createElement('a')
  aEle.id = 'recent_a'
  var hEle = document.createElement('h1')
  hEle.textContent = 'Recent Searched' //   recentEle.textContent =
  //   pEle.textContent = 'Recent Searched'

  aEle.textContent = cookies.getCookie('recent')
  aEle.href = cookies.getCookie('recent_link')
  aEle.target = '_blank'
  recentEle.className = 'recent card bg-info jumbotron'
  recentEle.id = 'recent'
  aEle.appendChild(pEle)
  recentEle.appendChild(hEle)
  recentEle.appendChild(aEle)

  if (document.getElementById('recent')) {
    document
      .getElementById('recent')
      .replaceChild(aEle, document.getElementById('recent_a'))
  } else {
    resultDivEle[0].appendChild(recentEle)
  }

  return true
}
