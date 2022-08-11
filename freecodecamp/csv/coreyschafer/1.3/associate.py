import sys 
import csv

def read_csv(filename):
    result = []

    # Implement reading a CSV into a list of records
    with open(filename, "r", newline="") as named_file:
        reader = csv.reader(named_file)
        for content in reader:
            result.append(content)
    return result

# result = []
# result = read_csv("data_info.csv")
# for r in result:
#     print(r)

def associate_records(priv_records, data_records):
    result = []

    # Implement associating filenames to phone numbers
    for p in priv_records:
        psubject_id = p[0]
        for d in data_records:
            dsubject_id = d[0]
            if (psubject_id == dsubject_id):
                filename = d[1]
                phone_number = p[1]
                result.append([filename, phone_number])
    return result

# result = []
# priv_records = read_csv("private_info.csv")
# data_records = read_csv("data_info.csv")
# result = associate_records(priv_records, data_records)
# for r in result:
#     print(r)

if len(sys.argv) != 3:
    print("Usage ./associate.py test1_private.csv test1_data.csv", file=sys.stderr)
    sys.exit(100)

priv_records = read_csv(sys.argv[1])
data_records = read_csv(sys.argv[2])
associated_records = associate_records(priv_records, data_records)

for associated_record in associated_records:
    print(f"{associated_record[0]},{associated_record[1]}")

# print(sys.argv)

# def write_testfiles(private_filename, data_filename):

#     private = [
#         ["subject_id", "phone_number"],
#         ["AAA123","374-571-5412"],
#         ["BBB123","368-781-5114"]
#     ]
#     data = [
#         ["subject_id", "filename", "timestamp"],
#         ["AAA123","face_2601.zip","2019-10-12T07:20:50.52Z"],
#         ["AAA123","ear_2602.zip","2019-10-12T07:22:50.52Z"],
#         ["AAA123","lips_2603.zip","2019-10-12T07:23:50.52Z"],
#         ["BBB123","face_5411.zip","2019-11-12T07:20:50.52Z"],
#         ["BBB123","ear_5412.zip","2019-11-12T07:22:50.52Z"],
#         ["BBB123","lips_5413.zip","2019-11-12T07:23:50.52Z"]
#     ]

#     with open(private_filename, "w", newline="") as private_file:
#         writer = csv.writer(private_file)
#         for p in private:
#             writer.writerow(p)

#     with open(data_filename, "w", newline="") as data_file:
#         writer = csv.writer(data_file)
#         for d in data:
#             writer.writerow(d)

# write_testfiles("p.csv", "d.csv")
