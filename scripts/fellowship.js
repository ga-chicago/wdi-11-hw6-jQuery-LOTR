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

  const midEarthSect = $('<section id="middle-earth"></section>');

  let element;

  for (i=0;i<lands.length;i++) {
    element = $('<article><h1></h1></article>');
    element.text(lands[i])
    element.appendTo(midEarthSect);
  }

  $("body").append(midEarthSect);

}

makeMiddleEarth();

function makeHobbits(){

  const ul = $("<ul>");

  for (hobbit of hobbits) {
    ul.append($('<li class="hobbit">').text(hobbit));
  }

  ul.appendTo($("article").eq(0));
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  const newJQDiv = $('<div id="the-ring"></div>');
  
  // give the div a class of `'magic-imbued-jewelry'`
  newJQDiv.addClass('.magic-imbued-jewelry');
  
  // add the ring as a child of `Frodo`
  $(".hobbit").eq(0).append(newJQDiv);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // create an `aside` tag
  const newJQaside = $('<aside>');
  // attach an `unordered list` of the `'buddies'` in the aside
  const ul = $("<ul>");

  for (buddy of buddies) {
    ul.append($('<li>').text(buddy));
  }

  ul.appendTo(newJQaside);

  // insert your aside as a child element of `rivendell`
  $('article').eq(1).append(newJQaside);
}

makeBuddies();

function beautifulStranger(){
  $('aside ul li').eq(3).text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
  $('.hobbit').appendTo($('aside ul'));
}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
  const fellDiv = $('<div class="the-fellowship">')
  fellDiv.appendTo($('article').eq(1));
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  const ul = $('aside ul');
  const lis = ul.children();
  const newUl = $('<ul>')
  newUl.appendTo(fellDiv);

  let li;
  
  for (i = 0; i < lis.length; i++) {
    li = lis.eq(i);
    li.appendTo(newUl);

    // after each character is added make an alert that they // have joined your party
    alert(li.text()+" has joined the party");
  }
  
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
  const Gandalf = $('.the-fellowship ul li').eq(0);
  Gandalf.text("Gandalf the White");
  
  // apply the following style to the element, make the // background 'white', add a grey border
  Gandalf.css({"background-color": "white",
                "border": "solid 1px grey"});
}

theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  $('.the-fellowship ul li').eq(4).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const frodo = $('.hobbit').eq(0);
  const sam = frodo.next();

  const mordor = $('article').eq(2)
  mordor.append(frodo);
  mordor.append(sam);
  // add a div with an id of `'mount-doom'` to `Mordor`
  mordor.append($('<div id="mount-doom">'));
}

itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of `'gollum'` and add it to Mordor
  const mordor = $('article').eq(2);
  mordor.append($('<div id="gollum">'));
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  $('#the-ring').appendTo('#gollum');
  // Move Gollum into Mount Doom
  $('#gollum').appendTo($('#mount-doom'));
}

weWantsIt();

function thereAndBackAgain(){
  // remove `Gollum` and `the Ring` from the document
  $('#gollum').remove();
  $('#the-ring').remove();
  // Move all the `hobbits` back to `the shire`
  $('.hobbit').appendTo($('article').eq(0));
}

thereAndBackAgain();
