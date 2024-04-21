import csv

name = input("What is name? ")
home = input("What is home? ")

with open("student.csv", "a") as file:
    # writer = csv.writer(file)
    # writer.writerow([name, home])
    writer = csv.DictWriter(file, lineterminator="\n", fieldnames=["name", "home"])
    writer.writerow({"name": name, "home": home})
