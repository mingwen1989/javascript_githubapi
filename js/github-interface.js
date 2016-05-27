var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;

$(document).ready(function() {

  $("#userFind").click(function() {
    var newUser = new Github($("#user").val());
    newUser.getUser();
    newUser.getRepos();
  });
});
