(function(exports) {
  NoteList = function() {
    this.notes = [];
    this.allNotes = function(){
      return this.notes;
    };
    this.add = function(noteText) {
      this.notes.push(new Note(noteText));
    };
  };

  exports.NoteList = NoteList;
}) (this);
