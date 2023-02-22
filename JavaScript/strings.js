//reverse a string 
// function reverseString(s){
//     return s.reverse()
// }
// console.log(reverseString(["h","e","l","l","o"]))



//valid palindrome
// function isPalindrome(s){
//     const regEx = /[\W_]/g
//     const lowRegEx = s.toLowerCase().replace(regEx, "")
//     const revS = lowRegEx.split("").reverse().join("")
//     return revS === lowRegEx
// }


//length of last word
// function lengthOfLastWord(s){
//     const w = s.trim().split(" ")
//     const last = w.length>0 ? w[w.length-1].length : 0
//     return last 
// }
// console.log(lengthOfLastWord("Hello World")) 



//valid anagram
function isAnagram(s, t){
    if(s.length !== t.length) return false 
    return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;
}

console.log(isAnagram("anagram", "nagaram"))