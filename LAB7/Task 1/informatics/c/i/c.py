import math
a=int(input())
b=int(input())

for i in range(a,b):
    x=math.sqrt(i)
    if x*x==i:
        print(i)