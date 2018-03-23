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
 
  $('<div>').append($('<h1>').text('the-fellowship')).appendTo($('article').eq(1))
  const liTags = $('li')

  //adds them to ship one at a time
  for(let i = 0; i < liTags.length; i ++){
    liTags.eq([i]).appendTo($("div:contains('the-fellowship')"))
  }

  alert('The hobbits and buddies have joined the party!!!')

}

forgeTheFellowship();

function theBalrog(){
  $('li:contains("Gandalf the Grey")').text('Gandalf the White').css({
    'background-color':'white',
    'border':'7px solid grey'
  })
  
}

theBalrog();

function hornOfGondor() {
  alert('Horn of Gondor has been blown');

  $("li:contains('Boromir')").remove()
}

hornOfGondor();

function itsDangerousToGoAlone() {
  $("li:contains('Frodo Baggins')").appendTo($('article').eq(2))
  $('li:contains("Samwise \'Sam\' Gamgee")').appendTo($('article').eq(2)) 
  $('<div>').attr('id','mount-doom').appendTo($('article').eq(2))
}

itsDangerousToGoAlone();

function weWantsIt() {
 $('<div>').attr('id','gollum').appendTo($('article').eq(2))

 $('#the-ring').appendTo($('#gollum'))

 $('#gollum').appendTo('#mount-doom')
}

weWantsIt();

function thereAndBackAgain(){
  $('#gollum').remove()
  $('.hobbit').appendTo($('article').eq(0))
}

thereAndBackAgain();
