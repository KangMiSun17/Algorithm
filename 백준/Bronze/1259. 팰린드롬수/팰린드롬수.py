arr = []

while True:
    n = input()
    m = len(n)//2
    if n == '0':
        break
    if len(n) % 2 == 0:
        a = n[:m]
        b = n[m:]
        if a == b[::-1]:
            arr.append("yes")
        else:
            arr.append("no")
    if len(n) % 2 != 0:
        a = n[:m]
        b = n[m+1:]
        if a == b[::-1]:
            arr.append("yes")
        else:
            arr.append("no")

for i in range(len(arr)):
    print(arr[i])