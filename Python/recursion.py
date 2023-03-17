#fibonacci number
# def fib(n):
    # if n==0 or n==1: return n 
    # return fib(n-1) + fib(n-2)
    ###this way is better but leetcode for some reason won't accept in python but yes in any other language lmao hahaha 

    ###another cool way!
    # if not n: return 0 
    # a, b = 1, 1
    # for i in range(3, n+1):
    #     a, b = b, a+b
    # return b 

    ##leetcode "friendly" way lol
    # a = 0
    # b = 1
    # if n < 0: print("Incorrect input")
    # elif n == 0:
    #     return 0
    # elif n == 1: return b
    # else:
    #     for i in range(1, n):
    #         c = a + b
    #         a = b
    #         b = c
    #     return b

# print(fib(3)) 