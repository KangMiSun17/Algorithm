from collections import deque
import sys

input = sys.stdin.readline
deq = deque()

n = int(input().rstrip())

for _ in range(n):
    user_input = input().rstrip()
    command = user_input.split()[0]
    if command == 'push_front':
        deq.appendleft(user_input.split()[1])
    if command == 'push_back':
        deq.append(user_input.split()[1])
    if command == 'pop_front':
        if len(deq) != 0:
            print(deq.popleft())
        else:
            print(-1)
    if command == 'pop_back':
        if len(deq) != 0:
            print(deq.pop())
        else:
            print(-1)
    if command == 'size':
        print(len(deq))
    if command == 'empty':
        if len(deq) == 0:
            print(1)
        else:
            print(0)
    if command == 'front':
        if len(deq) != 0:
            print(deq[0])
        else:
            print(-1)
    if command == 'back':
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[-1])