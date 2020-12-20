t = int(input())
for i in range(t):
    n = int(input())
    l = [0]*10**9
    r = [0]*10**10
    for j in range(n):
        l[j], r[j] = map(int, input().split())
    print(l)
    print(r)
