def readfilelines(filenametext):
    updated = open(filenametext, "r")
    for e in updated.readlines():
        print(e)
    updated.close()

filenametext = "employees.txt"
filename = open(filenametext, "a")
filename.write("\nToby - Human Resources") # add crlf then new entry.
filename.close()
readfilelines(filenametext)

filenametext = "employees1.txt" #rename or get orginal file overwritten.
newfile = open(filenametext, "w")
newfile.write("\nToby - Human Resources")
newfile.close()
readfilelines(filenametext)

htmlfile = open("index.html", "w")  #if file is not already created, "w" creates
htmlfile.write("<h1 style=\"color:limegreen\">Hello, World!</h1>")
htmlfile.write("<h2>Hello, World!</h2>")
htmlfile.close()

# filename = open("employees.txt", "r") #(r)ead, (w)rite, (a)ppend, r+ (read/write)
# # print(filename.readable())
# employees = filename.readlines()  # put all lines into a list.
# print(employees[2])
# print(employees)
# for e in employees:
#     print(e)
# # print(filename.readline()) # read line by line
# # print(filename.readline())
# # print(filename.read()) # read entire file.
# filename.close()

