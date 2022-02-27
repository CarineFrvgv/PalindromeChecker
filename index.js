// check if a word is a palindrome

function removeSpacePunctuation(args){
    // removes punctuation and accentuation
    const punctuation = /[\u0300-\u036f\!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    // removes space
    const space = /\s+/g;
    // normalize("NFD") decomposes accentuated letters (ó -> [o,´])
    const word = args.normalize("NFD").replace(punctuation, "").replace(space, "").toLowerCase();

    return palindrome(word);
};

function palindrome(word){ 
    if (word.length == 1){
        return(true);
    }
    let left = 0, right = word.length - 1;
    
    while(left <= right){
        if (word[left] != word[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
};

console.log(removeSpacePunctuation('A babá baba.'));
// console.log(palindrome('tattarrattat'));
// console.log(palindrome('kayak'));
// console.log(palindrome('civic'));
// console.log(palindrome('radar'));
// console.log(palindrome('level'));
// console.log(palindrome('deified'));
// console.log(palindrome('rotator'));
// console.log(palindrome('repaper'));
// console.log(palindrome('testset'));
// console.log(palindrome('racecar'));
// console.log(palindrome('dividerdetartrated'));








