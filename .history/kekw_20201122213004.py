t = int(input())
for i in range(t):
    n = int(input())
    l = [-1]*10**5
    r = [10**10]*10**5
    for j in range(n):
        l[j], r[j] = map(int, input().split())
    print(max(l), min(r))
