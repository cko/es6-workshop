var assert = require('assert');
var hamjest = require('hamjest');
var promiseThat = hamjest.promiseThat;
var isRejectedWith = hamjest.isRejectedWith;
describe('test setup', () => {
   it('works', () => {
       assert(true);
   });
});




describe('loading the katas JSON', () => {
    it('works',() => {
        return loadKatasJsonFrom(KATAS_URL);
    });
   
    it('fails for non-JSON data', () => {
      return promiseThat(loadKatasJsonFrom("http://es6katas.org"), isRejectedWith('Error loading katas.'));
    });
   
   it('fails for invalid JSON data', () => {
     return promiseThat(loadKatasJsonFrom(INVALID_URL), isRejectedWith('Invalid Json format'));
   });
});

