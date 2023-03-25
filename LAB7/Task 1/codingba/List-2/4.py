def sum67(nums):
  total = 0
  skip = False
  for i in range(len(nums)):
    if nums[i] == 6:
      skip = True
    elif nums[i] == 7 and skip:
      skip = False
    elif not skip:
      total += nums[i]
  return 