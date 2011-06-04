var helper = require("../helper")
  , Attendee = require("./attendee")
;

function Presentation() {
  this.id = helper.newId();
  this.attendees = {};

  Presentation.all[this.id] = this;
}

Presentation.prototype.createAttendee = function(arguments) {
  var attendee = new Attendee(arguments);
  this.attendees[attendee.id] = attendee;
  return attendee;
}

Presentation.all = {};

module.exports = Presentation;
