var assert = require('assert');
var hamjest = require('hamjest');
var loadKatasJsonFrom = require("./index.js");
var promiseThat = hamjest.promiseThat;
var isRejectedWith = hamjest.isRejectedWith;
describe('test setup', () => {
   it('works', () => {
       assert(true);
   });
});


var KATAS_URL='http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var INVALID_URL='http://katas.tddbin.com/katas/es6/language/__all__.json';


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

