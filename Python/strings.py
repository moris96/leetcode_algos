#longest palindromic substring 
def longest_palindrome(s):
    num = len(s)
    if num == 0:
        return 0 
    maxLen, start = 1, 0 
    for i in range(num):
        df = i - maxLen
        if df>=1 and s[df-1: i+1] == s[df-1: i+1][::-1]:
            start = df-1
            maxLen += 2 
            continue
        if df>=0 and s[df: i+1] == s[df: i+1][::-1]:
            start = df 
            maxLen += 1 
    return s[start: start + maxLen]

print(longest_palindrome('cbbd'))