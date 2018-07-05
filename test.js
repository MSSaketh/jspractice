console.log("hello world");

var sales = "toyota";
function carTypes(name) {
  if (name === "honda") {
    return name;
  } else {
    return "we don't sell " + name + ".";
  }
}
var car = { myCar: "saturn", getCar: carTypes("honda"), special: sales };

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

var car = { manyCars: { a: "chervolet", b: "Jeep" }, 1: "audi" };
console.log(car.manyCars.a);
console.log(car[1]);

var foo = { a: "alpha", 2: "two" };
console.log(foo.a);
// console.log(foo.2);
// console.log(foo[a]);
console.log(foo[2]);
console.log(foo["a"]);
console.log(foo["2"]);

console.log("saketh".length);

var quote = 'He read "The Cremation of Sam McGee" by R.W. Service.';
console.log(quote);

function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Enter exactly three characters. " +
        document.form1.threeChar.value +
        " is not valid."
    );
    return false;
  }
}

//   switch cases
var fruittype = "Bananas";
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");

// loops using while and break
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

// continue
var i = 0;
var j = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue; // restarts for while, do-while
  }
  j += i;
  console.log(j);
}

// lables
var a = 0;
var b = 10;
checkiandj: while (a < 4) {
  console.log("a = " + a);
  a += 1;
  checkj: while (b > 4) {
    console.log("b = " + b);
    b -= 1;
    if (b % 2 == 0) {
      continue checkj;
    }
    console.log(a + " is odd.");
  }
  console.log("a = " + a);
  console.log("b = " + b);
}

// functions
function add(a, b) {
  return a + b;
}
var x = add(3, 2);
console.log(x);

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));

var x = 0;
while (x < 10) {
  // "x < 10" is the loop condition
  // do stuff
  x++;
  console.log(x);
}

function subsquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) - square(b);
}
x = subsquares(5, 4);
console.log(x);

//nested function
function outside(m) {
  function inside(n) {
    return m + n;
  }
  return inside;
}
fn_inside = outside(2);
console.log(fn_inside);
res = fn_inside(4);
console.log(res);
res1 = outside(3)(4);
console.log(res1);

/*var mydata = new Object(),
str = "myString",
rand = Math.random();
obj = new Object();

mydata.type = 'Dot syntax';
mydata['date created'] = "String with space";
mydata[str] = "String value";
mydata[rand] = "random number";
mydata[obj] = "object";
mydata[''] = "Even an empty string";

console.log(mydata);*/

//object initializer
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var car = new Car("Audi", "A6", 2005);
console.log(car);

//getters and setters
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

//define a getter and setter for year property
var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function() {
    return this.getFullYear();
  },
  set: function(y) {
    this.setFullYear(y);
  }
});

//getter and setter in date object
var now = new Date();
console.log(now.year);
// now.year = 2001;
console.log(now);

//usin object initializer
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

//using Object.defineProperties...
var o = { a: 0 };
Object.defineProperties(o, {
  b: {
    get: function() {
      return this.a + 1;
    }
  },
  c: {
    set: function(x) {
      this.a = x / 2;
    }
  }
});

o.c = 10; //10/2 = 5 = a
console.log(o.b); //5+1 = 6

//delete objects

var obj = new Object();
obj.a = 5;
obj.b = 7;

delete obj.a;
console.log(obj.a);
console.log("b" in obj);

var a = [1,2,3,4];
a.forEach((num, index) => {
  return a[index] = num * 2;
});