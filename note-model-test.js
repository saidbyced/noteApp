// testing framework example

// var exclaim = require("./exclaim").exclaim;

// if (exclaim("hi") !== "hi!!!!!") {
//   throw new Error("Exclaiming hi should equal hi!!!!!");
// } else {
//   console.log(".");
// }

testingText = "Message in a method...whoooaaahhh"

var Note = require("./note-model").Note;
var note = new Note(testingText);

if (note.containsText() !== testingText) {
  throw new Error(`Note text should be ${testingText}`);
} else {
  console.log(".");
};
