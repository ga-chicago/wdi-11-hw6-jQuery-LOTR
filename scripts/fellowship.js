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
   // create an `aside` tag
   const aside = $('<aside>');
   const ulRivendell = $('<ul>');
   // attach an `unordered list` of the `'buddies'` in the aside
   for(i = 0; i < buddies.length; i++) {
    const li = $('<li>');
    li.text(buddies[i]);
    $(li).appendTo($(ulRivendell));
  }
  ulRivendell.appendTo($(aside));
   // insert your aside as a child element of `rivendell`
   aside.appendTo($('article')[1]);
}

makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
  $("li:contains('Strider')").text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
  //call hobbits class
let moveHobbits = $('li.hobbit');
  //move to ulRivendell
moveHobbits.appendTo($('article')[1]);
}

leaveTheShire();

function forgeTheFellowship() {
   //create a new div called `'the-fellowship'` within `rivendell`
   let fellowshipDiv = $('<div>').addClass('fellowship');
   $('li').addClass('the-fellowship');
   fellowshipDiv.appendTo($('article')[1]);

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    let ulFellowship = $('<ul>');
    let liFellowship = $('<li>'); 
    let moveHobsnBuds = $('.the-fellowship');
    moveHobsnBuds.appendTo(fellowshipDiv);
    alert(moveHobsnBuds.text() + ' has joined the party');
// }
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
const Gandalf = $('li:contains("Gandalf the Grey") ');
Gandalf.text("Gandalf the White");

// apply the following style to the element, make the // background 'white', add a grey border
Gandalf.css({"background-color": "white","border": "solid 1px grey"});

}

theBalrog();

function hornOfGondor() {
   // pop up an alert that the horn of gondor has been blown
   alert("The horn of gondor has been blown! Boromir's been killed by the Uruk-hai.")
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $('li:contains("Boromir")').remove();

}

hornOfGondor();

function itsDangerousToGoAlone() {
    // add a div with an id of `'mount-doom'` to `Mordor`
  let mountDoomDiv = $('<div>').attr('id', 'mount-doom')
  mountDoomDiv.appendTo($('article')[2]);

  let ulMordor = $('<ul>');
  let liMordor = $('<li>');
  ulMordor.appendTo((liMordor));
  liMordor.appendTo((liMordor));

  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let moveFrodo = $('li:contains("Frodo Baggins")');
  let moveSam = $('li:contains("Samwise \'Sam\' Gamgee")');
  moveFrodo.appendTo($('article')[2]);
  moveSam.appendTo($('article')[2]);
}

itsDangerousToGoAlone();

function weWantsIt() {
    // Create a div with an id of `'gollum'` and add it to Mordor
    let gollum = $('<div>').attr('id', 'gollum').appendTo($('article')[2]);
    let frodo = $('li:contains("Frodo Baggins")');
    let mountDoomDiv = $('<div>').attr('id', 'mount-doom')

    // Remove `the ring` from `Frodo` and give it to `Gollum`
    frodo.removeAttr('id', 'the-ring')
//can't get ring id to remove from Frodo

    const newDiv = $('<div>');
    newDiv.attr('id', 'the-ring');
    newDiv.addClass('magic-imbued-jewelry');
    newDiv.appendTo(gollum);
}

// // Move Gollum into Mount Doom
// $('div: contains("gollum")').appendTo($(mountDoomDiv))

// I can't get this last one to work - every time I try to move gollum, frodo and sam appear 
// back at mordor

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  let moveHobbits = $('li.hobbit');
  moveHobbits.appendTo($('article')[0]);
}

thereAndBackAgain();