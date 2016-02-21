var assert = require('assert');
let {promiseThat, isRejectedWith} = require('hamjest');
import GroupedKatas from "./grouped-katas.js";
import {INVALID_URL, KATAS_URL} from './config';

function loadKatasJsonFrom(url){
    return new GroupedKatas().load(url);
}

describe('test setup', () => {
   it('works', () => {
       assert(true);
   });
});


describe('loading the katas JSON', () => {
    it('works',() => loadKatasJsonFrom(KATAS_URL));
   
    it('fails for non-JSON data', () => promiseThat(loadKatasJsonFrom("http://es6katas.org"), isRejectedWith('Error loading katas.')));
   
    it('fails for invalid JSON data', () => promiseThat(loadKatasJsonFrom(INVALID_URL), isRejectedWith('Invalid Json format')));
});

