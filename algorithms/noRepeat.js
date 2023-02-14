"use strict";

// No Repeats Please

// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// permuation
// https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
function helperPermutation(res, arr, l, r){
  if(r == l)res.push(arr.join("")) //res.push(arr.join(""))
  else{
    for(var i=l; i < r; i++){
      swap(arr, i, l)
      helperPermutation(res, arr, l+1, r)
      swap(arr, i, l)
    }
  }
}

//https://stackoverflow.com/questions/872310/javascript-swap-array-elements
function swap(arr, i, j){
  var b = arr[i]
  arr[i] = arr[j]
  arr[j] = b
  return arr
}

function isRepeat(s){
  for(var i=0; i < s.length-1; i++){
    if(s[i] == s[i+1])return true
  }
  return false
}

function permAlone(s){
  var arr = s.split(""), size = s.length, res = []
  helperPermutation(res, arr, 0, size)
  var res2 = 0
  res.forEach(e=>{
    if(!isRepeat(e))res2++
  })
  return res2
}


permAlone("aab")