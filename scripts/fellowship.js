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
  const newSection = $("<section>").attr("id", "middle-earth");



function makeMiddleEarth() {
const newSection = $("<section>").attr("id", "middle-earth");

  newSection.appendTo("body");

    for (let i = 0; i < lands.length; i++) {
      const newArticle = $("<article>");
      newArticle.appendTo(newSection);
      const newH1 = $("<h1>");
      newH1.text(lands[i]);
      newH1.appendTo(newArticle);
    }
};

makeMiddleEarth();

function makeHobbits(){
  // create a ul for all the hobbits to be in
  const ul = $("<ul>")
  for (let i = 0; i < hobbits.length; i++) {
    // give each hobbit a class of `hobbit`
    const hobbit = $("<li>").attr("class", "hobbit");
    // name each hobbit
    hobbit.text(hobbits[i]);
    // append each hobbit to the ul
    hobbit.appendTo(ul);
   
  }
  // append only to the shire
  ul.appendTo($("h1").eq(0));
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  const div = $("<div>").attr("id", "the-ring");
   // give the div a class of `'magic-imbued-jewelry'`
  div.attr("class", "magic-imbued-jewelry");
   // add the ring as a child of `Frodo`
  div.appendTo($(".hobbit").eq(0));
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // create an `aside` tag
  const aside = $("<aside>");
  // create ul tag
  const ul = $("<ul>");
  // attach an `unordered list` of the `'buddies'` in the aside
  ul.appendTo(aside);
  for (let i = 0; i < buddies.length; i++) {
    // create li for each of the buddies
    const li = $("<li>");
    li.text(buddies[i]);
    li.attr("class", "buddy");
    // append each li to the ul
    li.appendTo(ul);
  }
   // insert your aside as a child element of `rivendell`
   aside.appendTo($("h1").eq(1));
}

makeBuddies();

function beautifulStranger(){
  // change strider text to aragorn
  $(".buddy").eq(3).text("Aragorn");
}

beautifulStranger();

function leaveTheShire() {
  // assemble the `hobbits` and move them to `rivendell`
  $(".hobbit").appendTo($("h1").eq(1));
}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
  const div = $("<div>").text("the fellowship").attr("class", "the-fellowship").appendTo($("h1").eq(1));
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  $(".buddy").appendTo($(".the-fellowship"));
  $(".hobbit").appendTo($(".the-fellowship"));
  // after each character is added make an alert that they // have joined your party
  for (let i = 0; i < buddies.length; i++) {
    alert(buddies[i] + " has joined your party!");
  }
  for (let i = 0; i < hobbits.length; i++) {
    alert(hobbits[i] + " has joined your party!");
  }
}

forgeTheFellowship();

function theBalrog(){
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const gandalf = ($(".buddy").eq(0));
   gandalf.text("Gandalf the White");
   gandalf.css({
    "background-color": "white",
    "border": "0.07em solid grey"
   });
   // apply the following style to the element, make the // background 'white', add a grey border
}

theBalrog();

function hornOfGondor() {
   // pop up an alert that the horn of gondor has been blown
   alert("The horn of Gondor has been blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
    ($(".buddy").eq(4)).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   ($(".hobbit").eq(0)).appendTo(($("article").eq(2)));
   ($(".hobbit").eq(0)).appendTo(($("article").eq(2)));
   // add a div with an id of `'mount-doom'` to `Mordor`
   ($("<div>").attr("id","mount-doom")).appendTo(($("article").eq(2)));
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
