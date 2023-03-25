n=int(input())
s=set()
l=list()
x=input().split()
for i in range(n):
    
    if int(x[i])%2==0:
        l.append(x[i])

print(l)

