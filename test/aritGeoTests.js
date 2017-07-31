const assert = require('chai').assert;
const app = require('../aritGeo.js');

describe('aritGeo', function(){
  describe('handles empty array', function(){
    it('should return 0 for empty array', function(){
      assert.equal(app.aritGeo([]),0);
    });
  });
});