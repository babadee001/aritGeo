const assert = require('chai').assert;
const app = require('../aritGeo.js');

describe('aritGeo', function(){
  describe('Handles empty array', function(){
    it('should return 0 for empty array', function(){
      assert.equal(app.aritGeo([]),0);
    });
  });
});
describe('aritGeo',function() {
  describe('Determines non arithmetic or geometric array', function(){
    it('should return -1 for non arithmetic/geometric arrays', function(){
      assert.equal(app.aritGeo([1,2,44,1000]),-1);
      assert.equal(app.aritGeo([15,3,22,4,1,0.2]),-1);
      assert.equal(app.aritGeo([0,1,2,1,2,1,1,1,77,856,-2]),-1);
    });
  });
});
describe('aritGeo',function(){
  describe('Determines if array is arithmetic sequence', function(){
    it('should return Arithmetic for Arithmetic sequences', function(){
      assert.equal(app.aritGeo([1,2,3,4]),'Arithmetic');
      assert.equal(app.aritGeo([5, 11, 17, 23, 29, 35, 41]),'Arithmetic');
      assert.equal(app.aritGeo([15, 10, 5, 0, -5, -10]),'Arithmetic');
      assert.equal(app.aritGeo([3,6,9,12,15,18,21,24,27,30]),'Arithmetic');
    });
  });
});
describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for geometric sequences", function() {
        assert.equal(app.aritGeo([2, 6, 18, 54, 162]),'Geometric');
        assert.equal(app.aritGeo([0.5, 3.5, 24.5, 171.5]),'Geometric');
        assert.equal(app.aritGeo([-128, 64, -32, 16, -8]),'Geometric');
      });
    });

