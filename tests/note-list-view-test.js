(function(exports) {
  function testEmptyNoteListViewOutput() {
    var testingNoteList = new NoteList();
    var testNoteListView = new NoteListView(testingNoteList);
    htmlString = '<ul></ul>'

    if(testNoteListView.allNotesInHtml() !== htmlString) {
      throw new Error(`${testEmptyNoteListViewOutput.name} test failed - \.allNotesInHtml() does not return ${htmlString}`);
    } else {
      console.log(`${testEmptyNoteListViewOutput.name} test passed`)
    };
  };

  function testNoteListViewSingleOutput() {
    var testingNoteList = new NoteList();
    testingNoteList.add("Test text");
    var testNoteListView = new NoteListView(testingNoteList);
    htmlString = '<ul><li><div>Test text</div></li></ul>'

    if(testNoteListView.allNotesInHtml() !== htmlString) {
      throw new Error(`${testNoteListViewSingleOutput.name} test failed - \.allNotesInHtml() does not return ${htmlString}`);
    } else {
      console.log(`${testNoteListViewSingleOutput.name} test passed`)
    };
  };

  function testNoteListViewMultipleOutput() {
    var testingNoteList = new NoteList();
    testingNoteList.add("Test text");
    testingNoteList.add("Other test text");
    testingNoteList.add("Other other test text");

    var testNoteListView = new NoteListView(testingNoteList);
    htmlString = '<ul><li><div>Test text</div></li><li><div>Other test text</div></li><li><div>Other other test text</div></li></ul>'

    if(testNoteListView.allNotesInHtml() !== htmlString) {
      throw new Error(`${testNoteListViewMultipleOutput.name} test failed - \.allNotesInHtml() does not return ${htmlString}`);
    } else {
      console.log(`${testNoteListViewMultipleOutput.name} test passed`)
    };
  };

  testEmptyNoteListViewOutput();
  testNoteListViewSingleOutput();
  testNoteListViewMultipleOutput();

})(this);
