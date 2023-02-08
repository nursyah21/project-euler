"use strict";

// Pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
// Index 	0 	1 	2 	3 	4
// Value 	7 	9 	11 	13 	15

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6


function pairwise(arr, arg) {
  var res=0
  for(var i=0; i < arr.length; i++){
    for(var j=i+1; j < arr.length; j++){
      if(arr[i] + arr[j] ==  arg){
        // console.log(arr[i],arr[j] ,"=", i, j, ";", arg)
        res += i + j 
        arr[i] = 9999
        arr[j] = 9999
      }
    }
  }
  return res;
}

var test = [
  {'test':[[1, 4, 2, 3, 0, 5], 7], 'ans':11},
  {'test':[[1, 3, 2, 4], 4], 'ans':1},
  {'test':[[0, 0, 0, 0, 1, 1], 1],'ans':10},
  {'test':[[1,1,1], 2],'ans':1},
  {'test':[[], 100],'ans':0},
]

test.forEach((e,idx)=>{
  var res = pairwise(...e['test']) == e['ans']
  console.log(`${idx+1}: ${res}`)
})
// var k = pairwise([1, 4, 2, 3, 0, 5], 7)
// console.log(k)