x = input("What is x? ")
y = input("What is y? ")

z = x + y
print(z)
print(int(z))

z = int(x) + int(y)
print(z)

x = int(input("What is x? "))
y = int(input("What is y? "))
print(x + y)

x = float(input("What is x? "))
y = float(input("What is y? "))

print(x + y)
print(round(x + y))

z = 1000
print(f"Z = {z:,}")

x = 8
y = 3
print(round(x / y, 2))
z = x / y
print(f"{z:.2f}")