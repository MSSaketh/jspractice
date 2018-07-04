function startsWith(input, string) {
    return input.indexOf(string) === 0;
  }
  console.log(startsWith('js string exercises', 'js'));


function endsWith(input, string) {
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}
console.log(endsWith('JS string exercises', 'exercises'));


function successor(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        length = alphabet.length,
        result = str,
        i = str.length;

    while(i >= 0) {
        var last = str.charAt(--i),
            next = '',
            carry = false;

        if (isNaN(last)) {
            index = alphabet.indexOf(last.toLowerCase());

            if (index === -1) {
                next = last;
                carry = true;
            }
            else {
                var isUpperCase = last === last.toUpperCase();
                next = alphabet.charAt((index + 1) % length);
                if (isUpperCase) {
                    next = next.toUpperCase();
                }

                carry = index + 1 >= length;
                if (carry && i === 0) {
                    var added = isUpperCase ? 'A' : 'a';
                    result = added + next + result.slice(1);
                    break;
                }
            }
        }
        else {
            next = +last + 1;
            if(next > 9) {
                next = 0;
                carry = true;
            }

            if (carry && i === 0) {
                result = '1' + next + result.slice(1);
                break;
            }
        }

        result = result.slice(0, i) + next + result.slice(i + 1);
        if (!carry) {
            break;
        }
    }
    return result;
}

console.log(successor('abcd'));
console.log(successor('3456'));





function guid(len) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length,
        length = len || 32;
        
    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }
    
    return buf.join('');
}

console.log(guid());  
console.log(guid(15));
  
