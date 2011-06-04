var helper = require("../helper");

function Attendee(arguments) {
  this.id = helper.newId();
  this.name = null;
  this.email = null;

  if (arguments) {
    for (var attr in arguments) {
      if (!this.hasOwnProperty(attr)) {
        continue;
      };

      this[attr] = arguments[attr];
    }
  };
}

Attendee.prototype.gravatarUrl = function() {
  return "http://gravatar.com/avatar/" + this.email.toString().md5() + "?d=mm";
}

module.exports = Attendee;
