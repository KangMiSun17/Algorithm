n = int(input())
nums = list(map(int, input().split()))
cnt = 0

for i in nums:
    result = []
    for j in range(1, i+1):
        if i % j == 0:
            result.append(j)
    if len(result) == 2:
        cnt += 1

print(cnt)