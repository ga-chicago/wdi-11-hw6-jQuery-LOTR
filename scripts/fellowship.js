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
    // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
    const sxn = $('<section>');
    sxn.attr('id', 'middle-earth');
    for(i = 0; i < lands.length; i++){
      const article = $('<article>')
      sxn.append(article);
      const h1 = $('<h1>').text(lands[i])
      article.append(h1)
    }
  $('body').append(sxn)
}

makeMiddleEarth();

function makeHobbits() {
  // display an `unordered list` of hobbits in the shire

  // create ul (get it in a variable since we will keep working with it)
  // put ul in shire (1st article tag)
 const ulShire = $('<ul>');

  for(i = 0; i < hobbits.length; i++) {
    // create li for this hobbit
    const li = $('<li>');

    // give the li class hobbit
    li.attr('class', 'hobbit');

    // put text in li
    li.text(hobbits[i]);

    // append li to ul
    $(li).appendTo($(ulShire));
  }
  // append ul to article.shire
  ulShire.appendTo($('article')[0]);
}

makeHobbits();

function keepItSecretKeepItSafe(){
   // create a div with an id of `'the-ring'`
   const newDiv = $('<div>');
   newDiv.attr('id', 'the-ring');
   // give the div a class of `'magic-imbued-jewelry'`
   newDiv.addClass('magic-imbued-jewelry');
   // add the ring as a child of `Frodo`
   newDiv.appendTo($('li')[0]);
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
