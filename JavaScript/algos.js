//Palindrome number 
/*
const isPalindrome = (x) => {
    if(x < 0) return false 
    let rev = 0
    let y = x
    while(y>0){
        const lastInt = y % 10
        rev = (rev * 10) + lastInt
        y = (y / 10) | 0
    }
    return x === rev
}
n = 121
// console.log(isPalindrome(n))
*/


// Valid Palindrome (string)
// const isPalindrome = (s) => {
//     return s == s.split('').reverse().join('')
// };
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("lol"))
// console.log(isPalindrome("amanaplanacanalpanama"))


//FizzBuzz (the most classic lol)
// const fizzBuzz = (n) => {
//     const output = []
//     for(let i = 1; i <= n; i++){
//         if(i % 15 == 0){
//             output.push("FizzBuzz")
//         } else if(i % 3 == 0){
//             output.push("Fizz")
//         } else if(i % 5 == 0){
//             output.push("Buzz") 
//         } else{
//             output.push(i.toString())
//         }
//     }
//     return output
// };
// console.log(fizzBuzz(15))


// Sqrt(x)
// const mySqrt = (x) => {
//     return (Math.floor(Math.sqrt(x)))
// };
// console.log(mySqrt(8))


// Math pow(x,n)
// const myPow = (x, n) => {
//     return x ** n
// };
// console.log(myPow(2,10))



// reverse linked list 
// function reverseList(head){
//     if(head===null) return null 
//     if(head.next===null) return head 
//     let newHead = reverseList(head.next)
//     head.next.next = head 
//     head.next = null 
//     return newHead
// }


//palindrome linked lists 
// function isPalindrome(head){
//     let curr = '';
//     let rev = '';
//     while(head){
//         curr += head.val 
//         rev = head.val + rev
//         head = head.next 
//     }
//     return curr === rev 
// }
// console.log(isPalindrome([1,2,2,1]))