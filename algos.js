//Roman to integer 
/*
const romanToInt = (s) => {
    let nums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0
    for(let i=0; i<s.length; i++){
        if(nums[s[i]] < nums[s[i+1]]){
            res -= nums[s[i]]
        } else{
            res += nums[s[i]]
        }
    }
    return res
};
x = "III" 
*/
// console.log(romanToInt(x))


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
const isPalindrome = (s) => {
    return s == s.split('').reverse().join('')
};
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("lol"))
// console.log(isPalindrome("amanaplanacanalpanama"))


//FizzBuzz (the most classic lol)
const fizzBuzz = (n) => {
    let output = []
    for(let i = 1; i <= n; i++){
        if(i % 15 == 0){
            output.push("FizzBuzz")
        } else if(i % 3 == 0){
            output.push("Fizz")
        } else if(i % 5 == 0){
            output.push("Buzz") 
        } else{
            output.push(i.toString())
        }
    }
    return output
};
// console.log(fizzBuzz(15))


// Sqrt(x)
const mySqrt = (x) => {
    return (Math.floor(Math.sqrt(x)))
};
// console.log(mySqrt(8))


// Math pow(x,n)
const myPow = (x, n) => {
    return x ** n
};
// console.log(myPow(2,10))


// Integer to Roman => recursion solution 
const intToRoman = (num) => {
 let romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
 }
 let res = ''
 for(key in romans){
    const count = Math.floor(num / romans[key])
    if(count !== 0){
        res += key.repeat(count)
    }
    num %= romans[key]
    if(num === 0){
        return res 
    }
 }
 return res 
};
// console.log(intToRoman(58))