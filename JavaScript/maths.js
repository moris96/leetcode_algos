//power of four
// function isPowerOfFour(n){
//     x = Math.log(n) / Math.log(4)
//     return x === Math.floor(x)
// }

// function isPowerOfFour(n){
//     if(n <= 0) return false 
//     while(n > 1){
//         if(n % 4 != 0) return false 
//         n = n/4 
//     }
//     return true 
// }
// console.log(isPowerOfFour(0))


//power of three
// function isPowerOfThree(n){
//     if(n <= 0) return false 
//     while(n > 1){
//         if(n % 3 != 0) return false 
//         n = n/3
//     }
//     return true 
// }
// console.log(isPowerOfThree(-1)) //returns false 



//power of two 
// function isPowerOfTwo(n){
//     if(n <= 0) return false 
//     while(n > 1){
//         if(n % 2 != 0) return false 
//         n = n/2
//     }
//     return true 
// }
// console.log(isPowerOfTwo(3))



//plus one
// function plusOne(digits){
//     for(let i = digits.length - 1; i>=0; i--){
//         if (digits[i] != 9) {
//             digits[i]++;
//             return digits 
//         } digits[i] = 0
//     }
//     digits.unshift(1)
//     return digits 
// }


//add two integers
// function sum(num1, num2){
//     return num1+num2
// }
// console.log(sum(12, 5))




//root equals sum of children (binary tree)
// function checkTree(root){
//     return root.val === root.left.val + root.right.val
// }


//same tree
// function isSameTree(p, q){
//     if(p===null && q===null) return true 
//     if(p===null || q==null) return false 
//     if(p.val === q.val){
//         const leftRes = isSameTree(p.left, q.left)
//         const rightRes = isSameTree(p.right, q.right)
//         return leftRes && rightRes
//     }
//     return false 
// }


//symmetric tree 
// const isSymmetric = (root) => {
//     return symmetric(root, root)
//     function symmetric(leftTree, rightTree){
//         if(leftTree===null && rightTree===null) return true 
//         if(leftTree===null || rightTree===null) return false 
//         return(leftTree.val===rightTree.val) && symmetric(leftTree.right, rightTree.left) && symmetric(leftTree.left, rightTree.right)
//     }
// }



//missing number 
// function missingNumber(nums){
//     const x = nums.length
//     let res = ((x + 1) * x) / 2
//     for (const num of nums) {
//         res -= num
//     }
//     return res 
// }
// console.log(missingNumber([3,0,1])) 



//add digits 
// function addDigits(num){
//     return((num-1) % 9 + 1)
// }
// console.log(addDigits(38))


//reverse integer
// function reverse(x){
//     const rev = parseFloat(Math.abs(x).toString().split("").reverse().join("")) 
//     if(rev > 2**31) return 0
//     return rev * Math.sign(x) 
// }
// console.log(reverse(1534236469)) 



//binary search 
// function search(nums, target){
//     const res = nums.indexOf(target)
//     return res 
// }
// console.log(search([-1,0,3,5,9,12], 9)) 



//convert number to hexadecimal 
// function toHex(num){
//     const hex = ((num) >>> 0).toString(16)
//     return hex 
// }
// console.log(toHex(-1)) //ffffffff
// console.log(toHex(26)) //1a



//single number
// function singleNumber(nums){
//     let res = 0
//     for(const i in nums){
//         res ^= nums[i]
//     }
//     return res 
// }
// console.log(singleNumber([2,2,1])) 