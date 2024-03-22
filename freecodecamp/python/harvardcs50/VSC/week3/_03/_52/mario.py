def main(): 
    # print_column(3)
    print_square(3)

def print_column(height):
    for _ in range(height):
        print("#")

# def print_square(size):
#     for i in range(size):
#         for j in range(size):
#             print("#", end="")
#         print()

# def print_square(size):
#     for i in range(size):
#         print("###", end="\n")

def print_square(size):
    for i in range(size):
        print_row()

def print_row():
    print("###", end="\n")
    
main()

