# comma separated variables.
# with open("students.csv") as file:
#     for line in file:
#         # row = line.rstrip().split(",")
#         # print(f"{row[0]} is in {row[1]}")
#         name, house = line.rstrip().split(",")
#         print(f"{name} is in {house}")

students = []
with open("students.csv") as file:
    for line in file:
        name, house = line.rstrip().split(",")
        # student = {}
        # student["name"] = name
        # student["house"] = house
        student = {"name" : name, "house" : house}
        students.append(student)

for student in students:
    print(f"{student['name']} is in {student['house']}")

# sort and print again.
# def get_name(student):
#     return student['name']

# for student in sorted(students, key=get_name, reverse=False):
#     print(f"{student['name']} is in {student['house']}")

# lambda anonymous function    
for student in sorted(students, key=lambda student:student['name'], reverse=False):
    print(f"{student['name']} is in {student['house']}")