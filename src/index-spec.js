var assert = require('assert');
let {promiseThat, isRejectedWith} = require('hamjest');
import {loadKatasJsonFrom} from "./index.js";

describe('test setup', () => {
   it('works', () => {
       assert(true);
   });
});


const KATAS_URL='http://katas.tddbin.com/katas/es6/language/__grouped__.json';
const INVALID_URL='http://katas.tddbin.com/katas/es6/language/__all__.json';


describe('loading the katas JSON', () => {
    it('works',() => loadKatasJsonFrom(KATAS_URL));
   
    it('fails for non-JSON data', () => promiseThat(loadKatasJsonFrom("http://es6katas.org"), isRejectedWith('Error loading katas.')));
   
    it('fails for invalid JSON data', () => promiseThat(loadKatasJsonFrom(INVALID_URL), isRejectedWith('Invalid Json format')));
});

