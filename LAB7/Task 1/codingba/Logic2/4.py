def lone_sum(a, b, c):
  if a == b:
    return 0 if a == c else  c 
  elif b == c:
    return a
  elif a == c:
    return b
  else:
    return a + b + 