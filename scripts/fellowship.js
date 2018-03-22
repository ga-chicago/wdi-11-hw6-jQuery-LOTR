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

function makeMiddleEarth() {
  $('<section>').attr('id', 'middle-earth').appendTo($('body'))
  for(let i = 0; i < 3; i++) {
    $('<article>').appendTo($('#middle-earth')).append($('<h1>').text(lands[i]));

  }
}

makeMiddleEarth();

function makeHobbits(){
  $('<ul>').appendTo($('article').eq(0));
  for(let i = 0; i < hobbits.length; i++) {
    $('<li>').text(hobbits[i]).addClass("Hobbit").appendTo($('ul'));
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry').appendTo($('li').eq(0))
}

keepItSecretKeepItSafe();

function makeBuddies(){
  $('<aside>').append($('<ul>')).appendTo($('article').eq(1))
  for(let i = 0; i < buddies.length; i++) {
    $('<li>').text(buddies[i]).appendTo($('ul').eq(1))
  }
}

   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

makeBuddies();

function beautifulStranger(){
  $('li').eq(7).text("Aragorn")
}

beautifulStranger();

function leaveTheShire(){
  $('ul').appendTo($('article').eq(1))
}

leaveTheShire();

function forgeTheFellowship() {
  $('<div>').attr('id', 'the-fellowship').text("The Fellowship").appendTo($('article').eq(1))
  const friends = $('ul');
  // friends.unwrap();
  friends.appendTo($('#the-fellowship'))
  for(let i = 0; i < $('li').length; i++) {
    // alert($('li').eq(i).text() + " has joined your party.")
  }
}


forgeTheFellowship();

function theBalrog(){
  const gandalf = $('li').eq(4);
  gandalf.text("Gandalf the White");
  gandalf.css({
    'background': 'white', 
    'border': '2px solid gray'
  })

}

theBalrog();

function hornOfGondor() {
  alert("The Horn of Gondor has been blown. Boromir has been killed by the Uruk-hai")
  const boromir = $('li').eq(8);
  boromir.remove();
}

hornOfGondor();

const mordor = $('article').eq(2)

function itsDangerousToGoAlone() {
  const frodo = $('li').eq(0)
  const sam = $('li').eq(1);
 
  frodo.appendTo(mordor)
  sam.appendTo(mordor)
  $('<div id="mount-doom">').appendTo(mordor)
}

itsDangerousToGoAlone();

function weWantsIt() {
  const gollum = $('<div id="gollum">')
  gollum.appendTo(mordor);
  $('#the-ring').appendTo(gollum)
  gollum.appendTo($('#mount-doom'))
}

weWantsIt();

function thereAndBackAgain(){
  gollum.remove();
  const theShire = $('article').eq(0)
  for (let i = 0; i < $('.Hobbit').length; i++) {
    const hobbit = $('.Hobbit').eq(i)
    hobbit.appendTo(theShire)
  }
}

thereAndBackAgain();
