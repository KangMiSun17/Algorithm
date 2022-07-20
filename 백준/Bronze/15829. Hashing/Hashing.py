n = int(input())
str1 = input()
answer = 0

for i in range(n):
    answer += (ord(str1[i]) - 96) * (31 ** i)
    
print(answer % 1234567891)