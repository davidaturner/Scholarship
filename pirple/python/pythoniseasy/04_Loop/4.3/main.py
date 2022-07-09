# while(condition):
#     action1
#     action2
#     action3
#     etc.

Range = []
Sum = 0
counter = 1
while(counter<=10):
    Sum += counter
    Range.append(counter)
    counter += 1
print(Range) 
print(Sum)  

# Note: Python doesn't have arrays. It has Lists. Like arrays though, it has elements.
# And is zero-based.
Index = 0
Helloworld = "H", "E", "L", "L", "O", ",", "W", "O", "R", "L", "D"
while Index < len(Helloworld):
    print(Helloworld[Index])
    Index += 1

# How many seconds does it take to drop from a height of 5000 ft going exactly
# 50 ft/sec?
Height = 5000
HeightChecked = []
Speed = 50
Time = 0
while Height > 0 :
    HeightChecked.append(Height)
    Height -= 50
    Time += 1
print(HeightChecked)
print(Time)
