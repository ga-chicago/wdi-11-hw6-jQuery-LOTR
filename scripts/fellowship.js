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
  let $middleEarth = $('<section>').attr('id','middle-earth')
   
   for(let i = 0; i < lands.length; i++){
      let $lands = $('<article>').append($('<h1>').text(lands[i]))
      $middleEarth.append($lands)

   }

   $('body').append($middleEarth)

}
makeMiddleEarth();

function makeHobbits(){
  let $ulTag = $('<ul>')

  for(let i = 0; i < hobbits.length; i ++){
    $ulTag.append($('<li>').addClass('hobbit').text(hobbits[i]))

  }

  $ulTag.appendTo($('article').eq(0))
}

makeHobbits();

function keepItSecretKeepItSafe(){
   $('<div>').attr('id','the-ring').addClass('magic-imbued-jewelry').appendTo($('.hobbit').eq(0))
}

keepItSecretKeepItSafe();

function makeBuddies(){
  const $aside = $('<aside>')

  const $ulTag = $('<ul>')
  for(let i = 0; i <buddies.length; i ++){
    $ulTag.append($('<li>').text(buddies[i]))
  }

  $ulTag.appendTo($aside.appendTo($('article').eq(1)))

}

makeBuddies();

function beautifulStranger(){


  
  $("li:contains('Strider')").text('Aragorn')
  
  
}

beautifulStranger();

function leaveTheShire(){
  $('.hobbit').appendTo($('article').eq(1))
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
