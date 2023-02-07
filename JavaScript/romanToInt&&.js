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
    for(i in romans){
       const count = Math.floor(num / romans[i])
       if(count !== 0){
           res += i.repeat(count)
       }
       num %= romans[i]
       if(num === 0){
           return res 
       }
    }
    return res 
   };
   console.log(intToRoman(3))