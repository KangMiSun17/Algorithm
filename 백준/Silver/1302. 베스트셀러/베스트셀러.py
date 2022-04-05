n = int(input())
books = {}

for i in range(n):
    book = input()
    if book not in books:
        books[book] = 1
    else:
        books[book] += 1

best_seller = []

for key in books.keys():
    if books[key] == max(books.values()):
        best_seller.append(key)

print(sorted(best_seller)[0])