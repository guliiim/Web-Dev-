def sum13(nums):
  total = 0
  skip = False
  if len(nums) == 0:
    return 0
  else:
    for i in range(len(nums)):
      if nums[i] == 13:
        skip = True
      elif skip:
        skip = False
      else:
        total += nums[i]
  return total