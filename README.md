# sort-js

sorta cool

## usage

get the code:

    $ git clone https://github.com/jaredmcdonald/sort-js.git

use it:

    var sort = require('sort-js')
    var sorted = sort.mergeSort([6,5,4,3,2,1]) // [1, 2, 3, 4, 5, 6]

## methods

where `n` is the length of the array passed in,

**mergeSort**: merge sort. `O(n log(n))`

**selectionSort**: selection sort. `O(n^2)`

You can pass in a custom comparator function as the second argument to any of the methods, e.g.,

    function greaterThan(a, b) {
      return a > b
    }

    var sorted = sort.mergeSort([1,2,3], greaterThan) // [3,2,1]

## tests

a bit bare-bones right now, but...

install dependencies (mocha and subdependencies):

    $ npm install

then:

    $ npm test
