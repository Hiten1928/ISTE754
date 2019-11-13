'use strict'

//Display the results for the selected choice
var displayResults = function displayResults(finalChoice) {
  var aEle = document.createElement('a'),
    displayText = '',
    nodeEle = document.createElement('div'),
    nodeLabelEle = document.createElement('label'),
    name = localStorage.getItem('name'),
    pathArrayResult = path.split('.'),
    choiceList = 'Based on the following choice: '
  nodeEle.id = 'dataDiv' //Add DHTML class with fadeInDown

  nodeEle.className = 'jumbotron fadeInDown'

  //Construct the display message on the basis of cookies, which involves validation as well
  if (name) {
    displayText =
      displayText +
      'Hi ' +
      name +
      '\n' +
      choiceList +
      pathArrayResult +
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

  //Don't set the recent search for the first page load and first search field
  if (name) {
    cookies.setCookie('recent', finalChoice.text)
    cookies.setCookie('recent_link', finalChoice.link)
  }

  //Replace the validation div by the search result if the user has entered the name AT LEAST ONCE in the whole session
  if (document.getElementById('dataDiv')) {
    document
      .getElementById('dataDiv')
      .parentNode.replaceChild(aEle, document.getElementById('dataDiv'))
  } else {
    document
      .getElementById('first')
      .parentNode.insertBefore(aEle, document.getElementById('first'))
  }
}
