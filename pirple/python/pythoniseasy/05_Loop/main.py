# Tic Tac Toe v1

#    |  |   0
#  -------- 1
#    |  |   2
#  -------- 3
#    |  |   4

# print("  |  |  ")
# print("--------")
# print("  |  |  ")
# print("--------")
# print("  |  |  ")

# for i in range(5):
#     if (i%2 == 0):
#         print("  |  |  ")
#     else:
#         print("--------")    

# print("  |  |  ")
#        12345678

for row in range(5):
    if row%2 == 0:
        for column in range(1,6):
            if column%2 == 1:
                if column != 5:
                    print(" ", end="")
                else:
                    print(" ")
            else:
                print("|", end="")
    else:
        print("------")

# def data_line() :
#     tower = "|"
#     blank = " "*2
#     return blank + tower + blank + tower + blank

# def bar_line():
#     return "-"*8

# for i in range(5):
#     if (i%2 == 0):
#         print(data_line())
#     else:
#         print(bar_line())           

# print(data_line())
# print(bar_line())
# print(data_line())
# print(bar_line())
# print(data_line())
