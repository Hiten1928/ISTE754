'use strict'

var displayResults = function displayResults(finalChoice) {
  var aEle = document.createElement('a'),
    displayText = '',
    nodeEle = document.createElement('div'),
    nodeLabelEle = document.createElement('label'),
    name = localStorage.getItem('name'),
    pathArray = path.split('.'),
    choiceList = 'Based on the following choice: '
  nodeEle.id = 'dataDiv' //Add DHTML class with fadeInDown

  nodeEle.className = 'jumbotron fadeInDown'

  if (name) {
    displayText =
      displayText +
      'Hi ' +
      name +
      '\n' +
      choiceList +
      pathArray +
      '\n' +
      'The utmost likeable college for you would be:  ' +
      finalChoice.text
  } else {
    displayText =
      displayText + 'Hi, please complete the form for viewing the college'
    for (var _j = 1; _j < mainDivEle.childNodes.length; _j++) {
      while (mainDivEle.lastElementChild) {
        mainDivEle.removeChild(mainDivEle.lastElementChild)
        if (document.getElementById('dataDiv')) {
          document
            .getElementById('dataDiv')
            .parentNode.removeChild(document.getElementById('dataDiv'))
        }
      }
    }
    console.log(ajaxURL)
    path = ''
    loadJson(ajaxURL, callback)
    document.getElementById('name').focus()
  }

  nodeLabelEle.textContent = displayText
  aEle.href = finalChoice.link
  aEle.target = '_blank'
  nodeEle.appendChild(nodeLabelEle)
  aEle.appendChild(nodeEle)
  recentSearch()
  cookies.setCookie('recent', finalChoice.text)
  cookies.setCookie('recent_link', finalChoice.link)
  document
    .getElementById('first')
    .parentNode.insertBefore(aEle, document.getElementById('first'))
}
