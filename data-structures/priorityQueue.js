"use strict";
// https://stackoverflow.com/questions/55611/javascript-private-methods#55637

function PriorityQueue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = function(e){
    var index = collection.findIndex(idx=>idx[1] > e[1])
    // replacing new element
    if (index !== -1){
      collection.splice(index, 0, e)
    }else{
      collection.push(e)
    }
  }
  this.dequeue = function(){
    return collection.shift()[0] 
  }
  this.front = function(){
    return collection[0][0]
  }
  this.size = function(){
    return collection.length
  }
  this.isEmpty = function(){
    return collection.length == 0
  }
  // Only change code above this line
}

var test = [ ['kitten', 2],['dog', 2], ['human', 1],  ['rabbit', 2]]
var b = new PriorityQueue()
test.forEach(e=>{
  b.enqueue(e)
})
b.print()