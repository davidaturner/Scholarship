# sets - lists with no duplicates.
students = [
    {"name" : "Hermoine", "house" : "Griffyndor"},
    {"name" : "Harry", "house" : "Griffyndor"},
    {"name" : "Ron", "house" : "Griffyndor"},
    {"name" : "Draco", "house" : "Slitherin"},
    {"name" : "Padma", "house" : "Ravenclaw"}
]

# houses = []
# for student in students:
#     if student["house"] not in houses:
#         houses.append(student["house"])
houses = set()
for student in students:
    houses.add(student["house"])

for house in sorted(houses):
    print(house)