//ex-32
function remove_non_ascii(str) {
  
    if ((str===null) || (str===''))
         return false;
   else
     str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
  }
  
  console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));


function remove_non_word (str) {
    if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();
  
var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  
  return str.replace(PATTERN, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));


function sentenceCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  
  console.log(sentenceCase('PHP exercises. python exercises.'));


function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

console.log(strip_html_tags('PHP Exercises'));
