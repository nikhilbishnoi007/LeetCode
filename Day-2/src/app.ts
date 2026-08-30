// Q1)  Find the Index of the First Occurrence in a String
// function strStr(haystack: string, needle: string): number {
// let index=haystack.indexOf(needle)
// return index
// };

// console.log(strStr("sadbutsad", "sad"))
// console.log(strStr("leetcode", "leeto"))

//Q2)Length of Last Word


function lengthOfLastWord(s: string): number {
    let lastWord: string = s.trim().split(" ").at(-1)!;
    let lengthOfLastWord=lastWord.length
    return lengthOfLastWord
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me  to   the moon  "))