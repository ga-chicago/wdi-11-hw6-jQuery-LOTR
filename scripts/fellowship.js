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
   const sxn = $("<section>").attr("id", "middle-earth")
   // add each land as an `article` tag
    for(let i = 0; i < lands.length; i++)  {
        
        const article =  $("<article>")
        sxn.append(article)
        // inside each `article` tag include an `h1` with the name of the land
        const h1 = $("<h1>").text(lands[i])
        article.append(h1)

    }


   // append `middle-earth` to your document `body`
   $("body").append(sxn)
  // your answers here
}

makeMiddleEarth();

function makeHobbits(){
   // display an `unordered list` of hobbits in the shire

  const unList = $("<ul>")

   for(let i = 0; i < hobbits.length; i++) {

    const listIt = $('<li class="hobbit">').text(hobbits[i])
    unList.append(listIt)

      // (which is the second article tag on the page)
  } // give each hobbit a class of `hobbit`
$("article").eq(0).append(unList) // this is not 
 
}


makeHobbits();

function keepItSecretKeepItSafe(){
   // create a div with an id of `'the-ring'`
   const ring = $("<div id='thering' class='magic-imbued-jewelry'>")

   $(".hobbit").eq(0).append(ring)

  console.log(ring)
   // give the div a class of `'magic-imbued-jewelry'`
    // add the ring as a child of `Frodo`
}

keepItSecretKeepItSafe();



function makeBuddies(){
     // create an `aside` tag
     const aside = $("<aside>")
     const unList = $("<ul>") 
     $(aside).append(unList)
     for(let i = 0; i < buddies.length; i++) {
        const listIt = $("<li>").text(buddies[i])
        unList.append(listIt)

     }
$("article").eq(1).append(aside) 
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`


}

makeBuddies();

function beautifulStranger(){
 // change the `'Strider'` text to `'Aragorn'`
// it is in the article

const changeStrider = $("aside").find("li").eq(3)

changeStrider.text("Aragorn")


   
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` 

  const hobbitsLeaving = $(".hobbit") // getting the hobbits 
  console.log(hobbitsLeaving)

  const goingtoRivendell = $("article").eq(1).find("ul")

  // console.log(goingtoRivendell)

  goingtoRivendell.append(hobbitsLeaving) // moving the hobits into riverdale




// and move them to `rivendell



}

leaveTheShire();


 const theFellowship = $("<div id='the-fellowship'>")

// console.log(theFellowship)

  const rivArticle = $("article").eq(1)

  // console.log(rivArticle)
  
  const rivendell = rivArticle.find("li")

  rivendell.append(".hobbit") // hobbit next to all the name

  // console.log(rivendell)


function forgeTheFellowship() {



// create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
// };
  for(let i = 0; i < rivendell.length; i++){
      theFellowship.append(rivendell.eq(i))

  }

  rivArticle.append(theFellowship)
 
};


forgeTheFellowship();



function theBalrog(){
   // change the `'Gandalf'` text to `'Gandalf the White'`

const newGandolf = rivendell.eq(0)

// console.log(newGandolf)

newGandolf.text("Gandalf the White")

newGandolf.css("background-color", "white")

newGandolf.css("border", "grey")

   // apply the following style to the element, make the // background 'white', add a grey border


}

theBalrog();

function hornOfGondor() {


// window.alert("HOOOORN")

  const deadBoromir = rivendell.eq(4)

  // console.log(deadBoromir)
  // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!

   deadBoromir.remove()
   // Remove `Boromir` from the Fellowship // boromir is dead 
}

hornOfGondor();


const mordor = $("article").eq(2)

console.log(mordor)

const frodo = rivendell.eq(5)

// console.log(frodo)

const divMordor = $("<div id='mount-doom'>")



  
function itsDangerousToGoAlone() {

  const sam = rivendell.eq(6)

  mordor.append(frodo)

  mordor.append(sam)



  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`  // need to make morodr 
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
   // Create a div with an id of `'gollum'` and add it to Mordor
const gollum = $("<div id='gollum'>")

console.log(gollum) 


const getRing = mordor.find('#thering') // finding ring from earlier 

mordor.append(gollum)

gollum.append(getRing)

divMordor.append(gollum)

// can you append into id?

   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  
// gollum.remove();

// remove.getRing();

const hobbitsLeaving = $(".hobbit")

const shire = $("article").eq(0)

shire.append(hobbitsLeaving)

}

thereAndBackAgain();
