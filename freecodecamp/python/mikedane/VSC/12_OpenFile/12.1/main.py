filename = open("employees.txt", "r") #(r)ead, (w)rite, (a)ppend, r+ (read/write)
# print(filename.readable())
employees = filename.readlines()  # put all lines into a list.
print(employees[2])
print(employees)
for e in employees:
    print(e)
# print(filename.readline()) # read line by line
# print(filename.readline())
# print(filename.read()) # read entire file.
filename.close()

