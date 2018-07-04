function capitalizeWords(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
}
console.log(capitalizeWords('js string exercises'));


function unCapitalizeWords(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));


function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }
   console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
   

function isLowerCaseAt(str, index) {
    return str.charAt(index).toLowerCase() === str.charAt(index);
       }
   console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
   


function humanize(number) {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
