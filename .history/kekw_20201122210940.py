t = int(input())

for i in range(t):
    a, b = map(int, input().split())
    print(a*(len(str(b+1))-1))
