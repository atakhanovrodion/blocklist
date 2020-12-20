t = int(input())
for i in range(t):
    n = int(input())
    l = [None]*10**5
    r = [None]*10**5
    for j in range(n):
        l[j], r[j] = map(int, input().split())
    print(max(l), min(r))
