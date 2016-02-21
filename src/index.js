var fetch = require('node-fetch');

var KATAS_URL='http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var INVALID_URL='http://katas.tddbin.com/katas/es6/language/__all__.json';

function loadKatasJsonFrom(url){
    return fetch(url).then(function(res){
        return res.json();
    })
    .catch(function(){
        throw 'Error loading katas.'
    })
    .then(function(katasJson){
      if('groups' in katasJson){
         return katasJson;
      }
      throw 'Invalid Json format'
    });
}

module.exports = loadKatasJsonFrom;
