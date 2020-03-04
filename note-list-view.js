(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype = {
    allNotesInHtml: function() {
      var htmlStringOfNotes = "";
      this.noteList.allNotes().forEach(element => {
        htmlStringOfNotes += `<li><div>${element.output()}</div></li>`;
      });
      return `<ul>${htmlStringOfNotes}</ul>`
    }
  };

  exports.NoteListView = NoteListView;
})(this);
