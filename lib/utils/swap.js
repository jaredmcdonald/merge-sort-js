/*
*  utility to swap array positions ***in-place***
*/
module.exports = function swap(arr, aIndex, bIndex) {
  var temp = arr[aIndex]
  arr[aIndex] = arr[bIndex]
  arr[bIndex] = temp
}
