(function(exports) {
  Note = function(text) {
    this.text = text;
    this.output = function() {
      return this.text;
    };
  };

  exports.Note = Note;
})(this);
