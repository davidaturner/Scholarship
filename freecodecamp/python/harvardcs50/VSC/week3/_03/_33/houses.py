students = {
    "Hermione":"Gryffindor",
    "Harry":"Gryffindor",
    "Ron":"Gryffindor",
    "Draco":"Slytherin"
}

# print(students["Hermione"])
# print(students["Harry"])
# print(students["Ron"])
# print(students["Draco"])

# for student in students:
#     print(student)

# for i in students:
#     print(i, students[i], sep=" : ")

more_students = [
    {"name":"Hermione", "house": "Gryffindor", "patronus":"otter"},
    {"name":"Harry", "house": "Gryffindor", "patronus":"stag"},
    {"name":"Ron", "house": "Gryffindor", "patronus":"jack russell terrier"},
    {"name":"Draco", "house": "Slytherin", "patronus":None}
]

for student in more_students:
    print(student)

for student in more_students:
    print(student["name"], student["house"], student["patronus"], sep=" : ")