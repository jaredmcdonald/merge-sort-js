var swap = require('./utils/swap')

module.exports = function sort(arr, comparator) {
  comparator = typeof comparator === 'function' ? comparator : function(a, b) {
    return a <= b
  }

  arr = arr.slice() // copy

  // var divider is a pointer to divide sorted prefix from unsorted suffix
  for (var divider = 0; divider <= arr.length; divider++) {
    var tempArr = arr.slice(divider); // this is the smaller, unsorted list
    for (var subIterator = 0; subIterator < tempArr.length; subIterator++) {
      if(comparator(tempArr[subIterator], arr[divider])) {
        swap(arr, subIterator + divider, divider)
      }
    }
  }
  return arr
}
