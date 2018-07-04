function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));

console.log(zeroFill(29, 4));


function compare_strings(str1, str2)
{
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));


function case_insensitive_search(str, search_str)
  {
    var result= str.search(new RegExp(search_str, "i"));
  
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
   }

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));


function Uncapitalize(str1){
    return str1.charAt(0).toLowerCase() + str1.slice(1);
  }
   console.log(Uncapitalize('Js string exercises'));


function unCapitalize_Words(str)
{ 
  return str.replace(/\w\S*/g, 
    function(txt)
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}

console.log(unCapitalize_Words('Js String Exercises'));
