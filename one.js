/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

if (true)
  {
    var x = 5;
  }
console.log(x);



function myconcat(separator){
    var res = '';
    var i;
    for(i = 1; i< arguments.length;i++)
    {
        result += arguments[i] + separator;
    }
    return result;
}

myconcat(',','A','B');
