def count_code(str):
  count = 0
  for i in range(len(str)):
    if str[i-2:i] == "co" and str[i+1:i+2] == "e":
      count += 1
  return count