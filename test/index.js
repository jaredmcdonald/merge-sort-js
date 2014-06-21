var assert = require('assert'),
    sort = require('..')

describe('merge-sort', function(){


  it('should correctly sort arrays of integers', function(){
    assert.deepEqual([1, 2, 3, 4, 5, 6], sort.mergeSort([6, 5, 4, 3, 2, 1]));
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7], sort.mergeSort([5, 1, 4, 7, 2, 3, 6]));
  })
  it('should correctly sort arrays of floats', function(){
    assert.deepEqual([1.23, 2.65, 6.3215, 40.6, 57, 281.43], sort.mergeSort([1.23, 2.65, 281.43, 40.6, 57, 6.3215]));
  })
  it('should be able to take a custom comparator', function(){
    function greaterThan(a, b) {
      return a >=b
    }
    assert.deepEqual([7, 6, 5, 4, 3, 2, 1], sort.mergeSort([5, 1, 4, 7, 2, 3, 6], greaterThan));
  })
  it('should deal with strings too', function(){
    assert.deepEqual(['a', 'b', 'c', 'd', 'e'], sort.mergeSort(['e', 'd', 'c', 'b', 'a']))
    assert.deepEqual(['andy', 'diana', 'hanan', 'james', 'jared'], sort.mergeSort(['diana', 'jared', 'james', 'andy', 'hanan']))
  })
})
