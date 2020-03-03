(function(exports) {
  NoteList = function() {
    this.notes = [];
    this.allNotes = function(){
      return this.notes;
    };
  };

  exports.NoteList = NoteList;
}) (this);
