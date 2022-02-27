// check if a word is a palindrome


function removeSpacePunctuation(args){
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const word = args.replace(regex, '').replace(/\s+/g, '').toLowerCase();
    console.log(word)
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

console.log(removeSpacePunctuation('Too bad--I hid a boot.'));
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








