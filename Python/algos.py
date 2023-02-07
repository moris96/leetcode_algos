#FizzBuzz (the most classic lol)
"""
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        output = []
        for i in range(1, n + 1):
            if i % 15 == 0:
                output.append("FizzBuzz")
            elif i % 3 == 0:
                output.append("Fizz")
            elif i % 5 == 0:
                output.append("Buzz")
            else:
                output.append(str(i))
        return output
"""
def fizzBuzz(n):
    output = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            output.append("FizzBuzz")
        elif i % 3 == 0:
            output.append("Fizz")
        elif i % 5 == 0:
            output.append("Buzz")
        else:
            output.append(str(i))
    return output
# print(f'FizzBuzz solution for 3 is: {fizzBuzz(3)} ; for 5 is: {fizzBuzz(5)} ; for 15 is: {fizzBuzz(15)}')


#math sqrt(x)
def mySqrt(x):
    return int((x ** 0.5) // 1)
#print(mySqrt(8))


#math pow(x,n)
def myPow(x, n):
    return x ** n
# print(myPow(2,-2))