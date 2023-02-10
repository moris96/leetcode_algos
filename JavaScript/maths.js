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