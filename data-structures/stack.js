function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(e){
    collection.push(e)
  }
  this.pop = function(){
    return collection.pop()
  }
  this.peek = function(){
    return collection[collection.length-1]
  }
  this.isEmpty = function(){
    return collection.length == 0
  }
  this.clear = function(){
   while(collection.length != 0) {
    collection.pop()
   }
  }
  // Only change code above this line
}

var a = new Stack()
a.push("ad")
a.push("das")
a.print()
var b = a.peek()
console.log(b)