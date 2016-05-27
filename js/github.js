var apiKey = require('./../.env').apiKey;

exports.Github = function(user) {
		this.user = user;
};

exports.Github.prototype.getUser = function() {
  $.get('https://api.github.com/users/' + this.user + '?access_token=' + apiKey).then(function(response){
  			$("#userName").html("<h1>Username: " + response.login + "</h1>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.Github.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + this.user + '/repos?access_token=' + apiKey).then(function(response){
  		
  		response.forEach( function(repo) {
  			$("#userRepos").append("<h4>" + repo.name + "</h4>");
  			$("#userRepos").append("<h4>" + repo.description + "</h4>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};