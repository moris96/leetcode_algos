#multiply strings 
# def multiply(num1, num2): 
#     return str(int(num1) * int(num2))
# print(multiply("123", "456"))


#longest common prefix 
# def longestCommonPrefix(strs):
#     if not strs: return ''
#     minW = min(strs)
#     maxW = max(strs)
#     if not minW: return ''
#     for i in range(len(minW)):
#         if maxW[i] != minW[i]:
#             return maxW[:i]
#     return minW[:]
# print(longestCommonPrefix(["flower","flow","flight"]))


#add binary
# def addBinary(a, b):
#     return bin(int(a,2) + int(b,2))[2:]

# ##another cool way 
# def addBinary2(a, b):
#     bina = int(a,2) + int(b,2)
#     return f'{bina:b}'

# print(addBinary('11', '1')) 
# print(addBinary2('11', '1')) 



#move zeroes -- don't return anything! more challenging that way!!! 
# def moveZeroes(nums):
#     size = 0
#     for i in range(0, len(nums)):
#         if nums[i] == 0: size += 1 
#         elif size > 0:
#             j = nums[i]
#             nums[i] = 0 
#             nums[i - size] = j 



#count primes 
# def countPrimes(n):
#     #0 & 1 are not primes obviously lol
#     primes = [True for i in range(n)]
#     i = 2
#     while(i*i < n):
#         if(primes[i]==True):
#             for j in range(i*i, n, i):
#                 primes[j] = False
#         i += 1
#     count = 0 
#     for i in range(2, len(primes)):
#         if primes[i]:
#             count += 1 
#     return count 
# print(countPrimes(10)) 


#maximum subarray 
# def maxSubArray(nums):
#     if max(nums)<0: return max(nums)
#     maxCurr, maxEnd = 0, 0
#     for i in nums:
#         maxEnd = maxEnd + i 
#         maxEnd = max(maxEnd, i)
#         maxCurr = max(maxCurr, maxEnd)
#     return maxCurr
# print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) 
# print(maxSubArray([-1])) 