var userData = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends.js", function(req, res) {
    res.json(userData);
  });

  var totalScore = 0;

  var matchScores = [];

// ---------------------------------------------------
  app.post("/api/friends.js", function(req, res) {

    //current user scores
    var userScores = req.body.scores;

    // most compatible friend.
    for (var i = 0; i < userData.length; i++) {
      var userScores2 = userData[i].scores;
      totalScore = checkScores(userScores, userScores2);
      matchScores.push(totalScore);
    }

    var array = 0;
    var defaultValue = matchScores[0];
    for (var i = 0; i < matchScores.length; i++) {
      if (matchScores[i] < defaultValue) {
        defaultValue = matchScores[i];
        array = i;
      }
    }
// best friend
    res.send(userData[array]);
    userData.push(req.body);

  });
};

var difference = 0;
// another friend
function checkScores(userScores, userScores2) {
  difference = 0;
  for (var i = 0; i < userScores.length; i++) {
    difference+=Math(userScores[i] - userScores2[i]);
  }
  return difference;
};
