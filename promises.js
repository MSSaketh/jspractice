//promises

// function doSomethingOldStyle(successCallback, failureCallback) {
//     console.log("It is done.");
//     // Succeed half of the time.
//     if (Math.random() > 0.5) {
//       successCallback("SUCCESS");
//     } else {
//       failureCallback("FAILURE");
//     }
//   }
  
//   function successCallback(result) {
//     console.log("It succeeded with " + result);
//   }
  
//   function failureCallback(error) {
//     console.log("It failed with " + error);
//   }
  
//   doSomethingOldStyle(successCallback, failureCallback);

  

//   function doSomething(){
//       return new Promise((resolve, reject)=>{
//           console.log("It's done");
//           if(Math.random()>0.5){
//               resolve("SUCCESS");
//           }
//           else{
//               reject("FAILURE");
//           }
//       })
//   }

//   const promise = doSomething();
//   promise.then(successCallback, failureCallback);


//call backs

 let y = function(callback){
     console.log("do something");
     callback();

 }
 let x = function(){
    console.log("I'm called from inside a function")
};
 y(x);

 function greeting(name){
     console.log('hello '+ name);
 }
 function processuserInput(callback){
     var name = "saketh";
     callback(name);
 }
 processuserInput(greeting);

 