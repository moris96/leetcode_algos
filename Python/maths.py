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

