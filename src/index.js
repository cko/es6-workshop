var fetch = require('node-fetch');


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
