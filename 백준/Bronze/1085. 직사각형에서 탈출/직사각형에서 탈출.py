x, y, w, h = map(int, input().split())
min_num = min(h-y, w-x)
min_num2 = min(x-0, y-0)
if min_num >= min_num2:
    print(min_num2)
else:
    print(min_num)