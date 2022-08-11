# name = input("Enter your name: ")
# age = input("What is your age: ")
# print(f'Hello, {name}, age: {age}!')

a = input("Enter a number: ")
b = input("Enter a 2nd number: ")

# result = a + b Incorrect. a and b are strings.
# result = int(a) + int(b) b is a string but int(b) fails to convert to int
result = float(a) + float(b)
print(result)