def make_chocolate(small, big, goal):
  if big * 5 + small < goal or goal % 5 > small:
    return -1
  elif big * 5 > goal:
    return goal - (goal / 5) * 5
  else:
    return goal - big * 5