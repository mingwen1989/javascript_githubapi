var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;

$(document).ready(function() {

  var newGithub = new Github();

  $('#showDetails').text(newGithub.getRepos());
    });
