const words = ['hello', 'goodbye', 'code', 'limit', 'computer'];

// const bigWords = [];
// for (let i = 0; i < words.length - 1; i++){
//     const word = words[i];
//     if (word.length > 5) {
//         bigWords.push(word);
        
//     }
// }

const bigWords = words.filter(word => word.length > 5);
console.log(bigWords);