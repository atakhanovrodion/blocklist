t = int(input())
for i in range(t):
    n = int(input())
    l = [null]*10**5
    r = [null]*10**5
    for j in range(n):
        l[j], r[j] = map(int, input().split())
    print(max(l), min(r))
