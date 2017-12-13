function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  //var ranksOne = ranks[0].children; var ranksTwo = ranks[1].children;
  for (let i=0; i<ranks.length; i++){
     ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {

}
