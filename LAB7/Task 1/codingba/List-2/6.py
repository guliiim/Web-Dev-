def has22(nums):
  has2 = False
  for i in range(len(nums)):
    if has2 and nums[i] == 2:
      return True
    elif nums[i] == 2:
      has2 = True
    else:
      has2 = False
  return False