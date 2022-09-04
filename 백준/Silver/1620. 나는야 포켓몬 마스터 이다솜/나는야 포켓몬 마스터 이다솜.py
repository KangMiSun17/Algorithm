import sys

input = sys.stdin.readline

n, m = map(int, input().split())

dict = {}

for i in range(1, n+1):
    inputPoketmon = input().rstrip()
    dict[i] = inputPoketmon
    dict[inputPoketmon] = i

for i in range(m):
    quest = input().rstrip()
    if quest.isdigit():
        print(dict[int(quest)])
    else:
        print(dict[quest])