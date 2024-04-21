names = []

name = input("What is my name? ")

# w = write a = write
# file = open("names.txt", "w")

# file = open("names.txt", "a")
# # file.write(name)
# file.write(f"{name}\n")
# file.close()

# open file, do file I/O with 'file', close file
with open("names.txt", "a") as file:
    file.write(f"{name}\n")

# read file
# with open("names.txt", "r") as file:
#     lines = file.readlines()
# # print lines
# for line in lines:
#     # print(f"Hello, {line}\n")
#     print(f"Hello, {line.rstrip()}")
    
# print lines in file
with open("names.txt", "r") as file:
    for line in file:
        # print(f"Hello, {line}\n")
        print(f"Hello, {line.rstrip()}")
