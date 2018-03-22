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
  // Create a section tag with an id of 'middle-earth'
  const $newSection = $('<section>').addClass('middle-earth');

  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land  
  for(i = 0; i < lands.length; i++){
    $newSection.append($('<article>').append($('<h1>').text(lands[i])))
  }

  // append 'middle-earth' to your document 'body'
  $('body').append($newSection);
}

makeMiddleEarth();

function makeHobbits(){
  const $theShire = $($('article')[0]);
  const $ul = $('<ul/>');
  console.log($ul, "<------ ul")
  $theShire.append($ul);
  //const $li = $('<li>').text;
  //$ul.append($li);
 for(i = 0; i < hobbits.length; i++){
  console.log(hobbits[i])
   $ul.append('<li>'+ hobbits[i] +'</li>');
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
 }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
}

makeBuddies();

function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
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
