//stack function
function foo(i){
    if(i<0){
        return;
    }
    console.log(i);
    foo(i-1);
    console.log(i);
}
foo(3);