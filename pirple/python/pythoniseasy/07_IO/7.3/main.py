
VacationSpots = ["London", "Minneapolis", "Baltimore", "Paris", "Lisbon"]

VacationFile = open("VacationPlaces", "w")
for spot in VacationSpots:
    # VacationFile.write(spot+ " ") #accepts only one argument
    # VacationFile.write(spot+ "\n")
    if (spot != 'Lisbon'):
        VacationFile.write(spot+ ",")
    else:
        VacationFile.write(spot)
VacationFile.close()

VacationFile = open("VacationPlaces", "r")
for spot in VacationFile:
    print(spot + " - definitely!")

# VacationFile = open("VacationPlaces", "w")
# for spot in VacationSpots:
#     VacationFile.write(spot + "\n")
# VacationFile.close()

# VacationFile = open("VacationPlaces", "r")
# for spot in VacationFile:
#     # print(spot) #includes written new line ()
#     print(spot, end="") #ignores (extra) new line

# def Listify(str):
#     Item = []
#     for ch in str:
#         Item.append(ch)
#     return Item

# print(Listify("Lemon"))

# def PrintVacationSpots():
#     with open("VacationPlaces", "r") as VacationFile:
#         for line in VacationFile:
#             print(line, end="")
    # VacationFile = open("VacationPlaces", "r")
    # for spot in VacationFile:
    #     print(spot, end="")
    # VacationFile.close()

# VacationFile = open("VacationPlaces", "r")
# FirstLine = VacationFile.readline()
# SecondLine = VacationFile.readline()
# print(FirstLine, end="")
# print(SecondLine, end="")
# VacationFile.close()

# VacationFile = open("VacationPlaces", "a")
# VacationFile.write("Pol Pot\n")
# VacationFile.close()
# PrintVacationSpots()

# VacationFile0 = open("VacationPlaces0", "w")
# VacationFile0.write("A denial\n")
# VacationFile0.close()
# VacationFile1 = open("VacationPlaces1", "w")
# VacationFile1.write("A denial\n")
# VacationFile1.close()
# VacationFile2 = open("VacationPlaces2", "w")
# VacationFile2.write("A denial\n")
# VacationFile2.close()

# for i in range(3):
#     with open("VacationPlaces" + str(i), "r") as VacationFile:
#         for line in VacationFile:
#             print(line,end="")
