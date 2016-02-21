var fetch = require('node-fetch');

export default class GroupedKatas {
    load(url){
        return loadKatasJsonFrom(url);
    }
}

function loadKatasJsonFrom(url){
    return fetch(url).then(res => res.json())
    .catch(() => {throw 'Error loading katas.'})
    .then(katasJson => {
      if('groups' in katasJson){
         return katasJson;
      }
      throw 'Invalid Json format'
    });
}

