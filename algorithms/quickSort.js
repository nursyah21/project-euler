"use strict";
// Implement Quick Sort

// Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

function partition(arr, low, high){
  var pivot = arr[high]
  var i = low - 1
  for(var j=low; j < high; j++){
    if(arr[j] <= pivot){
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i+1, high)
  return i+1
}

function helperQuickSort(arr, low, high){
  if(low < high){
    var pi = partition(arr, low, high)
    helperQuickSort(arr, low, pi-1)
    helperQuickSort(arr, pi +1, high)
  }
}

// https://www.geeksforgeeks.org/quick-sort/
function quickSort(array) {
  helperQuickSort(array, 0, array.length-1)
  return array;
}

//https://stackoverflow.com/questions/872310/javascript-swap-array-elements
function swap(arr, i, j){
  var b = arr[i]
  arr[i] = arr[j]
  arr[j] = b
  return arr
}

var arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

console.log(arr)
var arr1 = quickSort(arr)

console.log(arr1)