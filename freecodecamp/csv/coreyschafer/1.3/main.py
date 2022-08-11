import csv 

Output = []
with open("personal_info.csv", newline='') as personal_file:
    preader = csv.reader(personal_file)
    for p in preader:
        with open("data_info.csv", newline='') as dinfo_file:
            direader = csv.reader(dinfo_file)
            for di in direader:
                if p[0] == di[0]:
                    Output.append([di[1],p[1]])
with open("output.csv", "w", newline='') as out_file:
    owriter = csv.writer(out_file)
    for out in Output:
        owriter.writerow(out)