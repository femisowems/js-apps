function reverse(str, type) {
    if (type === 'word') {
        return str.split(' ').reverse().join(' ');
    } else if (type === 'string') {
        return str.split('').reverse().join('');
    }
}

const inputString = "Hello World!, I am a developer";
const reverseWords = reverse(inputString, 'string');

console.log(reverseWords);