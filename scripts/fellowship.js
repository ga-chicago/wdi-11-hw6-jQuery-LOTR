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
   $(".hobitt")eq(0).append(newDiv)
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
$('aside ul li').eq(3).text('Aragon');
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
  const newDiv = $('<div class="the-fellowship">').appendTo($('article').eq(1))
 // create a new div called 
 //`'the-fellowship'` within `rivendell`
 const ul = $('aside ul');
   // add each `hobbit` and `buddy` one 
  const li = $('aside ul li')
   //at a time to `'the-fellowship'`
   const newUl = $('<ul>')
   newUl.appendTo(newDiv)
   // after each character is added make an alert
   for(i= 0; i < li.length; i++) {
    li = li.eq(i);
    li.appendTo(newUl);
    alert(li.text() + "has joined the party");
   }
   // that they // have joined your party
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the
   const Gandalf = $('.the-fellowship ul li').eq(0);
   Gandalf.text('Gandalf the White');
   ul.buddies.css({
  'border-color': 'solid 1px grey',
  'background-color': 'white'}); 
   // background 'white', add a grey border
}

theBalrog();

function hornOfGondor() {
 alert('The horn of gondor has been blown !')
 $('.the-fellowship ul li').eq(4).remove();
}

hornOfGondor();
// ```js
// var itsDangerousToGoAlone = function (){
//// take `Frodo` and `Sam` out of the fellowship 
// and move // them to `Mordor`
//// add a div with an id of `'mount-doom'` to `Mordor`
// };
// ```
function itsDangerousToGoAlone() {
  const frodo = $('.hobbit').eq(0)
  const sam = $('.hobbit').eq(1)
  

  const mordor = $('article').eq(2)
  mordor.append(frodo);
  mordor.append(sam);
  mordor.append($('<div id="mount-doom">'));

}

itsDangerousToGoAlone();

function weWantsIt() {
   const mordor = $('article').eq(2);
   mordor.append($('<div id="#gollum>'));
   $('#gollum').appendTo($('#mount-doom'));

}

weWantsIt();

function thereAndBackAgain(){
  $('#gollum').remove();
$('#the-ring').remove();
$('.hobbit').appendTo($('article').eq(0));
}

thereAndBackAgain();


