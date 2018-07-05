// //stack function
// function foo(i){
//     if(i<0){
//         return;
//     }
//     console.log(i);
//     foo(i-1);
//     console.log(i);
// }
// foo(3);
var a = [1,2,3,4];
a.forEach((num, index) => {
  a[index] = num * 2;
});
console.log(a);


var maps = a.map(num => {
    return num * 2;
});
console.log(maps);