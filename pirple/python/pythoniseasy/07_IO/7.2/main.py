
VacationSpots = ["London", "Minneapolis", "Baltimore", "Paris", "Lisbon"]

VacationFile = open("VacationPlaces", "w")
for spots in VacationSpots:
    # VacationFile.write(spots+ " ") #accepts only one argument
    VacationFile.write(spots+ "\n")
VacationFile.close()

VacationFile = open("VacationPlaces", "r")
TheWholeFile = VacationFile.read()
print(TheWholeFile)