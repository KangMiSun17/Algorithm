N = int(input())
arr = []

for i in range(N):
    arr.append(input())

my_set = set(arr)
my_list = list(my_set) #집합은 sort함수를 쓰지 못하기 때문에 list로 다시 바꿔준다.
my_list.sort()
my_list.sort(key=len)

for i in my_list:
    print(i)