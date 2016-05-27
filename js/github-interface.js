var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;

var getName = function(userName) {
  $('#showUser').append("<h3>" + userName + "</h3>");
}

var displayRepo = function(list){
  for (var i = 0; i < list.length; i++) {
    $('repoList').append(i);
  }
}

var displayDescription = function(list){
  for (var i = 0; i < list.length; i++) {
    $('repoDescription').append(i);
  }
}

$(document).ready(function() {
  var newGit = new Github();
  $('#userFind').click(function() {
    var user = $('#user').val();
    newGit.getRepos(user);
  });
    });
