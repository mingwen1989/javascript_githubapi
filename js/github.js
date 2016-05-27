var apiKey = require('./../.env').apiKey;

exports.Github = function() {
}

exports.Github.prototype.getRepos = function(user){


  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    for (i=0; i < response.length; i++){
    	names = response[i].name;
    	descriptions = response[i].description;
    	console.log(names);
    	console.log(descriptions);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};