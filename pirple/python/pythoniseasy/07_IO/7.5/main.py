VacationFile0 = open("VacationPlaces0", "w")
VacationFile0.write("A denial\n")
VacationFile0.close()
VacationFile1 = open("VacationPlaces1", "w")
VacationFile1.write("A denial\n")
VacationFile1.close()
VacationFile2 = open("VacationPlaces2", "w")
VacationFile2.write("A denial\n")
VacationFile2.close()

for i in range(3):
    with open("VacationPlaces" + str(i), "r") as VacationFile:
        for line in VacationFile:
            print(line,end="")
