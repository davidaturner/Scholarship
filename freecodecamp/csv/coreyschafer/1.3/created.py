import csv

personal = [
    ["subject_id", "phone_number"],
    ["AAA123","374-571-5412"],
    ["BBB123","368-781-5114"]
]

data = [
    ["subject_id", "filename", "timestamp"],
    ["AAA123","face_2601.zip","2019-10-12T07:20:50.52Z"],
    ["AAA123","ear_2602.zip","2019-10-12T07:22:50.52Z"],
    ["AAA123","lips_2603.zip","2019-10-12T07:23:50.52Z"],
    ["BBB123","face_5411.zip","2019-11-12T07:20:50.52Z"],
    ["BBB123","ear_5412.zip","2019-11-12T07:22:50.52Z"],
    ["BBB123","lips_5413.zip","2019-11-12T07:23:50.52Z"]
]

with open("personal_info.csv", "w", newline="") as personal_file:
    csv_writer = csv.writer(personal_file)
    for p in personal:
        csv_writer.writerow(p)

with open("data_info.csv", "w", newline="") as dinfo_file:
    csv_writer = csv.writer(dinfo_file)
    for d in data:
        csv_writer.writerow(d)