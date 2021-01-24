# A Better Calculator
firstnumber = input("Enter first number: ")
operator = input("What operation is to be performed: ")
secondnumber = input("Enter second number: ")

a = float(firstnumber)
b = float(secondnumber)

if operator == "+":
    print(a + b)
elif operator == "-":
    print(a - b)
elif operator == "*":
    print(a * b)
elif operator == "/" and b != 0:
    print(a / b)
else:
    print("No Op")
