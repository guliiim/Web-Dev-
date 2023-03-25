def not_string(s):
  if len(s) >= 3 and s[:3] == "not":
    return s
  return "not " + s