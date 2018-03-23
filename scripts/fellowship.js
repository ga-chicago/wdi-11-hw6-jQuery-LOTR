console.log("Linked.asdfvasdfasdf");

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


function makeMiddleEarth() { console.log('hey')
  const syx = $('<section>').attr('id', 'middle-earth')
  for(let i =0; i< lands.length; i++){
    
    const article = $('<article>')
    syx.append(article);

    const h1 = $('<h1>').text(lands[i])
    article.append(h1)

  }
  $('body').append(syx)
}

makeMiddleEarth();

function makeHobbits(){
  /// display an `unordered list` of hobbits in the shire

  const ul = $('<ul>').addClass('hobbit')
  ul.appendTo($('article').eq(0))
      // (which is the second article tag on the page)
  for(let i =0; i < hobbits.length; i++){
    const li = $('<li>').text(hobbits[i])
    $(ul).append(li)
  }
   // give each hobbit a class of `hobbit`
}
  
  

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  const newDiv = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry');
  
   // give the div a class of `'magic-imbued-jewelry'`
    //('newDiv').appendTo($('li'))
   // add the ring as a child of `Frodo`
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // create an `aside` tag
  
   const aside = $('<aside>')
   // attach an `unordered list` of the `'buddies'` in the aside
    aside.appendTo($('article').eq(1))
   // insert your aside as a child element of `rivendell
    
    const ul = $('<ul>').addClass('buddies')
    $(aside).append(ul)
  //   for(let i =0; i < buddies.length; i++){
  //   const li = $('<li>').text(buddies[i])
  //   $(ul).append(li)
  

  // }
}
makeBuddies();

function beautifulStranger(){
// change the `'Strider'` text to `'Aragorn'`
//ul.buddies.text('Aragon')
}

beautifulStranger();

function leaveTheShire(){
  for(let i =0; i < buddies.length; i++){
    const li = $('<li>').text(buddies[i])
    $(ul).append(li)
  }

}

leaveTheShire();

function forgeTheFellowship() {
  const syn = $('<div>').appendTo($('article').eq(1))
 // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the
   ul.buddies.css({
  'border-color': 'grey',
  'background-color': 'white'
}) 
   // background 'white', add a grey border
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


