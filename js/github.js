var apiKey = require('./../.env').apiKey;

exports.Github = function() {
}

exports.Github.prototype.getRepos = function(){
  $.get('https://api.github.com/users/themingfu/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};