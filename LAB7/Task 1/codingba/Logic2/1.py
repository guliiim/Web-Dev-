def make_bricks(small, big, goal):
  return goal - big * 5 <= small and goal % 5 <= small 