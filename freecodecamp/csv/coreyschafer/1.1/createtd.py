import csv

lines = [
    ["first_name", "last_name", "email"],
    ["Neil", "Smith", "nsmith@bogusmail.com"],
    ["Corey", "Wilks", "cwilks@bogusmail.com"],
    ["Corey", "Smith", "csmite@bogusmail.com"],
    ["Martha", "My-dear", "mmdear@bogusmail.com"],
    ["Nomi", "Smith", "nsmith1@bogusmail.com"]
]

with open("names.csv", "w", newline='') as csv_file:
    cvs_writer = csv.writer(csv_file)
    for line in lines:
        print(line)
        cvs_writer.writerow(line)