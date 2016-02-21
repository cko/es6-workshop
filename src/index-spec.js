var assert = require('assert');
let {promiseThat, isRejectedWith} = require('hamjest');
import GroupedKatas from "./index.js";

function loadKatasJsonFrom(url){
    return new GroupedKatas().load(url);
}

describe('test setup', () => {
   it('works', () => {
       assert(true);
   });
});


const URL_PREFIX='http://katas.tddbin.com/katas/es6/language/';
const KATAS_URL='${URL_PREFIX}' + '__grouped__.json';
const INVALID_URL='${URL_PREFIX}' + '__all__.json';


describe('loading the katas JSON', () => {
    it('works',() => loadKatasJsonFrom(KATAS_URL));
   
    it('fails for non-JSON data', () => promiseThat(loadKatasJsonFrom("http://es6katas.org"), isRejectedWith('Error loading katas.')));
   
    it('fails for invalid JSON data', () => promiseThat(loadKatasJsonFrom(INVALID_URL), isRejectedWith('Invalid Json format')));
});

