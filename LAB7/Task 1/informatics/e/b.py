a ,n=map(int,input().split())

def power(a, n):
    if n == 0:
        return 1
    else:
        return a * power(a, n - 1)

x=power(a, n)
print(x)