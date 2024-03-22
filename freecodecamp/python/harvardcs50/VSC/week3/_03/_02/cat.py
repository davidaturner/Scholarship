# for i in [0,1,2]:
#     print("Meow")

for i in range(3): 
    print("Meow")

# for _ in range(3): 
#     print("Meow")

# print("Meow\n"*3, end="")
    
# while True:
#     n = int(input("What is x? "))
#     if n > 0:
#         break
# for _ in range(n):
#     print("Meow")

def main():
    n = get_number()
    meow(n)

def get_number():
    while True:
        n = int(input("What is x? "))
        if n > 0:
            break
    return n

def meow(n):
    print(n)
    for _ in range(n):
        print("Meow")

main()