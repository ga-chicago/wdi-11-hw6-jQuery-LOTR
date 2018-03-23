console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth(){
  const newSection = $('<section id="middle-earth">');
  for(let i = 0; i < lands.length; i++){
    const article = $('<article>');
    newSection.append(article);
    const h1 = $('<h1>').text(lands[i]);
    article.append(h1);
  }
  $('body').append(newSection);
}

makeMiddleEarth();



function makeHobbits(){
  const unList = $('<ul>');
  for(let i = 0; i < hobbits.length; i++){
    const listIt = $('<li class="hobbit">').text(hobbits[i]);

    unList.append(listIt);
  }
  $('article').eq(0).append(unList)
}

makeHobbits();

function keepItSecretKeepItSafe(){
  const ring = $('<div id="the-ring" class="magic-imbued-jewelry">');
  console.log(ring)
  $('.hobbit').eq(0).append(ring)
}

keepItSecretKeepItSafe();

function makeBuddies(){
  const aside = $('<aside>')
  const unList = $('<ul>')
  aside.append(unList)
  for(let i = 0; i < buddies.length; i++){
    const listIt = $('<li>').text(buddies[i])
    unList.append(listIt)
  }
  $('article').eq(1).append(aside)
}

makeBuddies();

function beautifulStranger(){
  $('li').eq(7).text('Aragorn')
}

beautifulStranger();

function leaveTheShire(){
  $('ul').eq(0).appendTo('aside');
}

leaveTheShire();

function forgeTheFellowship() {
  const div = $('<div id="the-fellowship">');
  $('article').eq(1).append(div)
  const unList = $('<ul>')
  unList.appendTo(div)
  for(let i = 0; i < $('li').length; i++){
    console.log($('li').eq(i).text() + ' has joined your party')
    $('li').eq(i).appendTo(unList)
  }
}

forgeTheFellowship();

$('.overlay').css({
  'background-color': 'rgba(0,0,0,0.0)'
})

function theBalrog(){
  $('li').eq(4).text('Gandalf the White')
  $('li').eq(4).css({
    'background-color': 'white',
    'border-color': 'grey',
  })
  // apply the following style to the element, make the // background 'white', add a grey border
}

theBalrog();

function hornOfGondor() {
  alert('The horn of gondor has been blown')
  console.log('The horn of gondor has been blown')
  alert("Boromir's been killed by the Uruk-hai!")
  console.log("Boromir's been killed by the Uruk-hai!")
  $('li').eq(5).remove()
}

hornOfGondor();

function itsDangerousToGoAlone() {
  $('li').eq(2).appendTo($('article').eq(2))
  $('li').eq(6).appendTo($('article').eq(2))
  const div = $('<div id="mount-doom">');
  div.appendTo($('article').eq(2))
}

itsDangerousToGoAlone();

function weWantsIt() {
  const div = $('<div id="gollum">Gollum</div>')
  div.appendTo($('article').eq(2))
  $('div').eq(2).appendTo(div)
  div.appendTo($('div').eq(2))
}

weWantsIt();

function thereAndBackAgain(){
  $('div').eq(3).remove();
  $('.hobbit').appendTo($('article').eq(0))
}

thereAndBackAgain();
