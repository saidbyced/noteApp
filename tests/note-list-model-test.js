var NoteList = require("../note-list-model").NoteList;
var Note = require("../note-model").Note;

(function(exports) {
  function testAllNotesOutput() {
    var noteList = new NoteList;
    testText = "Favourite drink: seltzer";
    noteList.notes.push(new Note(testText));

    if((noteList.allNotes()[0]).output() !== testText) {
      throw new Error(`.allNotes() should return a Note containing \"${testText}\"`);
    } else {
      console.log('.');
    };
  };

  testAllNotesOutput();
})(this);

// (function(exports) {
//   function testAddNote() {
//     var noteList2 = new NoteList;
//     testText = "Favourite drink: soda pop";
//     noteList2.add(testText);

//     if(noteList2.allNotes()[0].output() !== testText) {
//       throw new Error(`.add(\"${testText}\") should add that Note to .notes`);
//     } else {
//       console.log('.');
//     };
//   };

//   testAddNote();
// })(this);
