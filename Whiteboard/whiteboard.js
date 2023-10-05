// Title: Find Indexes of Capital Letters

// Problem Statement:
// Write a JavaScript function that takes a single string (word) as an argument. The function should return an ordered list containing the indexes of all capital letters in the string.

// console.log(findIndexesOfCapitalLetters("CodEWaRs")); // Output: [0, 3, 4, 6]

// Explanation:
// For the input "CodEWaRs", the capital letters are "C", "E", "W", and "R". Their corresponding indexes in the word are 0, 3, 4, and 6, which are returned in the array [0, 3, 4, 6].

function findIndexesOfCapitalLetters(word) {
    let capitalIndexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            capitalIndexes.push(i);
        }
    }
    return capitalIndexes;
}

console.log(findIndexesOfCapitalLetters("codEWaRs"));