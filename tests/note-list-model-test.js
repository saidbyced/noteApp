var NoteList = require("../note-list-model").NoteList;
var Note = require("../note-model").Note;

// Test 1
var noteList1 = new NoteList;
testText = "Favourite drink: seltzer";
noteList1.notes.push(new Note(testText));

if ((noteList1.allNotes()[0]).output() !== testText) {
  throw new Error ('.allNotes should return all Notes on noteList');
} else {
 console.log('.')
};
