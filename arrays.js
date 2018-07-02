a = Array.from("saketh");
console.log(a);

var fruits = ["Apple", "Orange", "Mango"];
l = fruits.length; // length of an array
console.log(l);

var first = fruits[0]; // index
var last = fruits[l - 1];
console.log(first + " " + last);

//loop over an array
fruits.forEach(function(item, index, array) {
  console.log(index + "-" + item);
});

// push for adding at end
var nl = fruits.push("Banana");
console.log(fruits);

fruits.forEach(function(item, index, array) {
  console.log(index + "-" + item);
});

// pop for removing at end
var last = fruits.pop();
console.log(fruits);

// shift for removing at start
var first = fruits.shift();
console.log(fruits);

// unshift for adding at start
var first = fruits.unshift("Papaya");
console.log(fruits);

//indexof for finding index of an item
var pos = fruits.indexOf("Orange");
console.log(pos);

//removing an item by index position using splice
var ri = fruits.splice(pos, 1);
console.log(ri);
console.log(fruits);

//removing multiple items
var cars = ['Audi','Benz','Mini-Cooper','Volvo'];
console.log(cars);

var pos = 1, n = 2;
var remI = cars.splice(pos,n);

console.log(cars);

console.log(remI);

//copying an array
var copy = cars.slice();
console.log(copy);