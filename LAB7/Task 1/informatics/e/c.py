def xor(x):
    if (x[0] and not x[-1]) or (x[-1] and not x[0]):
        return 1
    return 0
 
 
l = map(int, input().split())
print(xor(l))