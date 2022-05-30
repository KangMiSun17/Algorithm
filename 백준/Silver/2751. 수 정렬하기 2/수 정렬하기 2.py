import sys
input = sys.stdin.readline

n = int(input().rstrip())
arr = []

for _ in range(n):
    arr.append(int(input().rstrip()))

for j in sorted(arr):
    print(j)