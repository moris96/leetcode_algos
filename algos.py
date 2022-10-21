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
print(fizzBuzz(15))
print(fizzBuzz(5))
print(fizzBuzz(3))