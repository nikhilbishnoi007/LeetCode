// Q1)  Find the Index of the First Occurrence in a String
// function strStr(haystack: string, needle: string): number {
// let index=haystack.indexOf(needle)
// return index
// };

// console.log(strStr("sadbutsad", "sad"))
// console.log(strStr("leetcode", "leeto"))



// Q2)Length of Last Word
// function lengthOfLastWord(s: string): number {
//     let lastWord: string = s.trim().split(" ").at(-1)!;
//     let lengthOfLastWord=lastWord.length
//     return lengthOfLastWord
// };

// console.log(lengthOfLastWord("Hello World"))
// console.log(lengthOfLastWord("   fly me  to   the moon  "))

// Q3) Multiply String

function multiply(num1: string, num2: string) {
    if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            
            const digit1 = Number(num1[i]) 
            const digit2 = Number(num2[j]) 
            const product = digit1 * digit2; 
            
            const p1 = i + j;       
            const p2 = i + j + 1;   
            const sum = product + result[p2] 
            result[p2] = sum % 10; 
            result[p1] += Math.floor(sum / 10); 
        }
    }
    let start = 0;
    while (start < result.length - 1 && result[start] === 0) {
    start++;
}
    const finalArray = result.slice(start);
    const finalString = finalArray.join("")
    return finalString
}

console.log(multiply("122","323"))
