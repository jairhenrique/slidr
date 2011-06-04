var crypto = require("crypto")
  , Helper = {}
;

String.prototype.md5 = function() {
  return crypto.createHash("md5").update(this.toString()).digest("hex");
}

Helper.newId = function() {
  return (new Date()).toString().md5();
}

module.exports = Helper;
