function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reverseStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reverseStr;
}

const inputString = "A man, a plan, a canal, Panama";
const isPalindromic = isPalindrome(inputString);

console.log(isPalindromic);