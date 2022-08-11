import csv

fieldnames = []
with open("names.csv", "r", newline='') as cvs_file:
    csv_reader = csv.reader(cvs_file)

    # fieldnames = next(csv_reader)

    with open("new_names.csv", "w", newline='') as new_file:
        # csv_writer = csv.writer(new_file)
        # csv_writer = csv.writer(new_file, delimiter='-')
        csv_writer = csv.writer(new_file, delimiter='\t') #tab

        for line in csv_reader:
            csv_writer.writerow(line)
