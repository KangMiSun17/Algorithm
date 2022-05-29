def solution(priorities, location):
    queue = [(i, p) for i, p in enumerate(priorities)]
    answer = 0
    while True:
        cur = queue.pop(0)
        if any(cur[1] < q[1] for q in queue):
            queue.append(cur)
        else:
            answer += 1
            if cur[0] == location:
                return answer

n = int(input())
result = []

for i in range(n):
    num, first = map(int, input().split())
    arr = list(map(int, input().split()))
    result.append(solution(arr, first))

for j in result:
    print(j)