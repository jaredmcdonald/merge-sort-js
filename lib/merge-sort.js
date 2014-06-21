module.exports = function sort (arr, comparator) {
  comparator = typeof comparator === 'function' ? comparator : function (a, b) {
    return a <= b
  }

  if (arr.length < 2) {
    return arr.slice() // copy
  } else {
    var middle = Math.floor(arr.length / 2),
      left = sort(arr.slice(0, middle), comparator),
      right = sort(arr.slice(middle), comparator)

    return merge(left, right, comparator)
  }
}

function merge (left, right, comparator) {
  var result = [],
    leftPos = 0,
    rightPos = 0

  while (leftPos < left.length && rightPos < right.length) {
    if (comparator(left[leftPos], right[rightPos])) {
      result.push(left[leftPos])
      leftPos++
    } else {
      result.push(right[rightPos])
      rightPos++
    }
  }

  // tack on the remainder of whichever
  // array we haven't gotten to the end of
  result = result.concat(left.slice(leftPos)).concat(right.slice(rightPos))

  return result
}
