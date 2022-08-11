
VacationSpots = ["London", "Minneapolis", "Baltimore", "Paris", "Lisbon"]


VacationFile = open("VacationPlaces", "w")
for spot in VacationSpots:
    VacationFile.write(spot + "\n")
VacationFile.close()

VacationFile = open("VacationPlaces", "r")
for spot in VacationFile:
    # print(spot) #includes written new line ()
    print(spot, end="") #ignores (extra) new line

def Listify(str):
    Item = []
    for ch in str:
        Item.append(ch)
    return Item

print(Listify("Lemon"))

def PrintVacationSpots():
    with open("VacationPlaces", "r") as VacationFile:
        for line in VacationFile:
            print(line, end="")
    # VacationFile = open("VacationPlaces", "r")
    # for spot in VacationFile:
    #     print(spot, end="")
    # VacationFile.close()

VacationFile = open("VacationPlaces", "r")
FirstLine = VacationFile.readline()
SecondLine = VacationFile.readline()
print(FirstLine, end="")
print(SecondLine, end="")
VacationFile.close()

VacationFile = open("VacationPlaces", "a")
VacationFile.write("Pol Pot\n")
VacationFile.close()
PrintVacationSpots()

