def double_char(str):
  result = ""
  for i in range(len(str)):
    result += str[i:i+1] + str[i:i+1]
  return result