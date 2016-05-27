var apiKey = require('./../.env').apiKey;

exports.Github = function(user) {
		this.user = user;
};

exports.Github.prototype.getUser = function() {
  $.get('https://api.github.com/users/' + this.user + '?access_token=' + apiKey).then(function(response){
  			$("#userName").html("<h1>" + response.login + "</h1>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.Github.prototype.getAvatar = function() {
  $.get('https://api.github.com/users/' + this.user + '?access_token=' + apiKey).then(function(response){
  			$("#userAvatar").html("<img style='width: 65px; float: left; margin-right: 10px; margin-left: 10px; margin-top: 10px; margin-bottom: 10px;' src=' " + response.avatar_url + "'></img>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.Github.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + this.user + '/repos?access_token=' + apiKey).then(function(response){
  		
  		response.forEach( function(repo) {
			if(repo.description.length>1){
  			$("#userRepos").append("<tr><td>"+repo.name+"</td><td>"+repo.description+"</td></tr>");				
			}
			else{
				$("#userRepos").append("<tr><td>"+repo.name+"</td><td></td></tr>");
			}

    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};