function strStr(haystack: string, needle: string): number {
let index=haystack.indexOf(needle)
return index
};

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))