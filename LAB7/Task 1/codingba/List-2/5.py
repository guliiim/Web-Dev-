def centered_average(nums):
  nums.sort()
  count = 0
  total = 0
  for i in range(1, len(nums) - 1):
    count += 1
    total += nums[i]
  return total / count