Hello = "Hello"
for ch in Hello:
    print(ch)

Letters = []
for l in Hello:
    Letters.append(l)

print(Letters)

Grades = [90, 87.5, 72, 82, 96]
for grade in Grades:
    print(grade)

Numbers = [1, 2, 3, 4, 5]
Result = []
for n in Numbers:
    if n%2 == 0:
        Result.append(n)
print(Result)

Range = []
for j in range(10):
    Range.append(j)
print(Range)

Range = []
# range - starting number, ending but not including ("cap"), increment
for j in range(3, 11, 2):
    Range.append(j)
print(Range)

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

Participant = ["Jan", "Fran", "Tina", "Carl", "John"]
position = 1
for name in Participant:
    if name == "Tina":
        break
    position += 1
print(position)

index = 0
while index <= len(Participant):
    if (Participant[index] == "Tina"):
        break;
    index += 1
print(index)
print(Participant[index])

position = 1
for p in range(len(Participant)):
    if (Participant[p] == "Tina"):
        break;
    position += 1
print(index)
print(Participant[position-1])

Divisiblebythree = []
for number in range(10):
    print(number)
    if (number%3 != 0):
        print("Not Divisible By Three")
        continue
    print("Divisible By Three")
    Divisiblebythree.append(number)
print("Divisible By Three:")
print(Divisiblebythree)