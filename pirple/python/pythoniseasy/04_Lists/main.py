# elements = ["element1", "element2", "element3"]
# elementindexes = [0,1,2]

Grades = ["67", "85.9", "75", "90", "92"]
print(Grades)

print(Grades[0])

print(Grades[4])
print(Grades[-1])

# First element to but not including second element value.
print(Grades[0:2])
print(Grades[2:])
print(Grades[:3])

Grade0Bonus = True
Grade1Bonus = True
# if Grade0Bonus == True:
#     Grades[0] = "72"
if Grade0Bonus == True and Grade0Bonus == True:
    Grades[0:2] = "72", "90.9"
print(Grades)

Grades[1:3] = []
print(Grades)

Grades[1] = []
print(Grades)

Grades[1] = ["Hello", "World!"]
print(Grades)

print(Grades[1][0])
print(Grades[1][1])
print(Grades[1][-1])
print(Grades[1][:1])

Grades.append("82")
print(Grades)

moreStudents = "100", "99"
Grades.append(moreStudents)
print(Grades)

