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
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
  for(i = 0; i < hobbits.length; i++){
    //console.log(hobbits[i])
    $ul.append('<li>'+ hobbits[i] +'</li>');
 }
};

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of "the-ring"
  const $newDiv = $($('<div>'));
  // give the div a class of 'magic-imbued-jewlery'
  $newDiv.addClass('magic-imbued-jewlery');
  $newDiv.attr('id', "the-ring");
  const $frodo = $('li')[0];
  //console.log($newDiv);
  //console.log($frodo);
  //add the ring as a child of 'Frodo
  $newDiv.appendTo($frodo);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  //create an 'aside' tag
  const $newAside = $('<aside>');
  //attach an unordered list of the 'buddies' in the aside
  const $rivendell = $($('article')[1]);
  //console.log($rivendell);
  const $ul2 = $('<ul/>');
  $rivendell.append($ul2);
  for(i = 0; i < buddies.length; i++){
    //console.log(buddies[i])
    $ul2.append('<li>'+ buddies[i] +'</li>').attr('class', 'buddies');
  }
};

makeBuddies();

function beautifulStranger(){
  $aragorn = $("li").eq(7);
  console.log($aragorn);
  $aragorn.text('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
  // assembly the hobbits and move them to rivendell
  const $rivendell = $($('<article>')[1]);
  $('ul').appendTo($rivendell);
}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called 'the-fellowship' within 'rivendell'
  const $rivendell = $($('<article>').eq(1));
  const $newDiv = $('<div>').attr('id', 'the-fellowship');
  $newDiv.appendTo($rivendell);
    for(i = 0; i < hobbits.length; i++){
    //console.log(hobbits[i])
    $newDiv.append('<li>'+ hobbits[i] +'</li>');
 }
   for(i = 0; i < buddies.length; i++){
    //console.log(buddies[i])
    $newDiv.append('<li>'+ buddies[i] +'</li>');
  }
}

forgeTheFellowship();

function theBalrog(){
  const $gandalfTheWhite = $('li').eq(4).text("Gandalf the White");
  $gandalfTheWhite.css({
    'background': 'white',
    'border': '5px solid gray'
  })
}

theBalrog();

function hornOfGondor() {
  alert("The horn of gondor has been blown! Boromir is dead - killed by the Uruk-hai.");
  const $boromir = $('<li>').eq(8);
  console.log($boromir);
  $boromir.remove();

}

hornOfGondor();

function itsDangerousToGoAlone() {
  const $mordor = $('article').eq(2);
  const $mountDoom = $('<div>').attr('id', "Mount-Doom")
  $mordor.append($mountDoom);
  //console.log($mordor);
  const $am = $('li').eq(1);
  //console.log($am);
  const $frodo = $('li').eq(0);
  //console.log($frodo);
  $am.appendTo($mordor);
  $frodo.appendTo($mordor);
}

itsDangerousToGoAlone();

function weWantsIt() {
  const $mordor = $('article').eq(2);
  const $gollum = $('<div>').attr('id', "Gollum");
  $gollum.appendTo($mordor);
  $('#the-ring').appendTo($gollum);

}

weWantsIt();

function thereAndBackAgain(){
  $gollum.remove();
  const $theShire = $($('article')[0]);
  for(i = 0; i < hobbits.length; i++){
    //console.log(hobbits[i])
    ('<li>'+ hobbits[i] +'</li>').appendTo($theShire);
 }

}

thereAndBackAgain();
