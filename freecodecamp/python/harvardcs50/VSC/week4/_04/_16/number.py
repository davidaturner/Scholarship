# what if you enter 'cat'?
# try:
#     x = int(input("What is x? "))
#     print(f"x is {x}")
# except ValueError:
#     print("x is not a number.")

# try:
#     x = int(input("What is x? "))
# except ValueError:
#     print("x is not a number.")
# else:
#     # avoid NameError
#     print(f"x is {x}")

#reprompting as needed
# while True:
#     try:
#         x = int(input("What is x? "))
#     except ValueError:
#         print("x is not a number.")
#     else:
#         break
    
# print(f"x is {x}")

# while True:
#     try:
#         x = int(input("What is x? "))
#         break
#     except ValueError:
#         print("x is not a number.")
    
# print(f"x is {x}")

# def get_int():
#     # while True:
#     #     try:
#     #         x = int(input("What is x? "))
#     #         break
#     #     except ValueError:
#     #         print("x is not a number.")
#     # return x
#     while True:
#         try:
#             return int(input("What is x? "))
#         except ValueError:
#             # print("x is not a number.")
#             pass

# def main():
#   x = get_int()
#   print(f"x is {x}")  

# get_int is made more reuseable with 'prompt' variable
def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            pass

def main():
  x = get_int("What is x? ")
  print(f"x is {x}")  

main()