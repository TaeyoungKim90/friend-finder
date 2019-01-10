var path = require("path");

module.exports = function(app) {

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(name, "/../public/survey.html"));
  });

};