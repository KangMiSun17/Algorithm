N = int(input())
arr = []

for i in range(N):
    arr.append(input())

my_set = set(arr)
my_list = list(my_set)
my_list.sort()
my_list.sort(key=len)

for i in my_list:
    print(i)