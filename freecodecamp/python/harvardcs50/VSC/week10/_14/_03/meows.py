# using type hints
def meow(n: int):
    for _n in range(n):
        print("meow")

# meow(3)
# number = input("Enter number: ")
number : int = int(input("Enter number: "))
meow(number)
# use in conjunction with 'pip install mypy'