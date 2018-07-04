function identift(input)
{
   if (Object.prototype.toString.call(input) === '[object String]')
   console.log(true);

else
console.log(false);
}
identift('abcd');
identift('w3resource');
identift([1,2,3,4]);


is_Blank =  function(input) {
    if (input.length === 0)
    return true;
    else 
    return false;
  }
console.log(is_Blank(''));
console.log(is_Blank('abc'));


string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));


truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));


abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));
