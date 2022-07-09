"""
Python figures out what Type the variable.
But once decided you cannot treat like another Type.
All variables created (outside a fn) is Global.
Take advantage by use Constants as Global.
"""

one = 1
two = 2
three = 3
# four = 4

Count = 0
Count += 1
print(Count)
Count *= 6
print(Count)
Count /= 2
print(Count)