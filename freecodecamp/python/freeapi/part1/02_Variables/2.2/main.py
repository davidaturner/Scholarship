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

print(one)
print(two)
print(three)
two = 4
print(two)
print(one)
Decimal = 1
StringVal = "Hello!"
Float = 1.1

def myfunc():
    global Eighteen
    Eighteen = 18
    print(two)
    print(Eighteen)
    return Eighteen

AlsoEighteen = myfunc()
print(Eighteen)
print(AlsoEighteen)

Nineteen, Twenty = 19, 20
print(Nineteen)
print(Twenty)

TwentyOne = Nineteen + 2
print(TwentyOne)

Count = 0
Count += 1
print(Count)
Count *= 6
print(Count)
Count /= 2
print(Count)