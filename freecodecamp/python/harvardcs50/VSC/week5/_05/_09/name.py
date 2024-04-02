import sys

# print("hello, my name is", sys.argv[1])
# print("hello, my name is", sys.argv[0])

# try:
#     print("hello, my name is",sys.argv[1])
# except:
#     print("Too few arguments")

fullname = ""
# if (len(sys.argv) < 2):
#     print("Too few arguments")
# else:
#     for i in range(len(sys.argv)):
#         if i==0:
#             continue
#         fullname = fullname + sys.argv[i] + " "
#     print("hello, my name is",fullname)

if (len(sys.argv) < 2):
    sys.exit("Too few arguments")

# for i in range(len(sys.argv)):
#     if i==0:
#         continue
#     fullname = fullname + sys.argv[i] + " "
# print("hello, my name is",fullname)

for arg in sys.argv[1:]:
    fullname = fullname + arg + " "
print("hello, my name is", fullname)
