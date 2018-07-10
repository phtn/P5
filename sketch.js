
let userInput
const wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
const contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&%20Page&prop=revisions&rvprop=content&format=json&formatversion=2&titles='

function setup(){
  noCanvas()
  userInput = select('#user-input')
  userInput.changed(goWiki)
}

function goWiki(){
  let input = userInput.value()
  const url = wikiUrl + input
  loadJSON(url, getSearch, 'jsonp')
}

function getSearch(data){
  let title = data[1][1]
  console.log(title)
  title = title.replace(/\s+/g, '_')
  const url = contentUrl + title
  loadJSON(url, getContent, 'jsonp')
  console.log(url)
}

function getContent(content){
  const pages = content.query.pages
  console.log(pages[0].revisions[0].content)
}

function draw(){
  background(0)
  noLoop()
}