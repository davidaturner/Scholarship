import csv

fieldnames = []
with open("names.csv", "r", newline='') as cvs_file:
    csv_reader = csv.DictReader(cvs_file)

    # for line in csv_reader:
    #     print(line)

    with open("new_names.csv", "w", newline='') as new_file:

        fns = ['first_name', 'last_name']

        csv_writer = csv.DictWriter(new_file, fieldnames = fns, delimiter='\t') #tab

        csv_writer.writeheader()

        for line in csv_reader:
            del line['email']
            csv_writer.writerow(line)
