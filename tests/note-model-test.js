var Note = require("../note-model").Note;
var testingText = "Message in a object...whoooaaahhh";

var note = new Note(testingText);

if (note.output() !== testingText) {
  throw new Error(`Note text should be ${testingText}`);
} else {
  console.log(".");
};
