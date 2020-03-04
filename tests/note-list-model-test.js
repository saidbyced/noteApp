(function(exports) {
  function testAllNotesOutput() {
    var noteList = new NoteList;
    testText = "Favourite drink: seltzer";
    noteList.add(testText);

    if((noteList.allNotes()[0]).output() !== testText) {
      throw new Error(`.allNotes() should return a Note containing \"${testText}\"`);
    } else {
      console.log(`${testAllNotesOutput.name} passes`);
    };
  };

  testAllNotesOutput();
})(this);
