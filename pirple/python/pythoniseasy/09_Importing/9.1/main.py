import random

randomFloat = random.random()
print(randomFloat)

i = 0
while( i < 3):
    d100 = int((random.random()) * 100)
    print("Roll the die:", d100)
    i += 1
print("Done!")

auniform = format(random.uniform(1, 100), ".2f")
buniform = format(random.uniform(1, 100), ".2f")
cuniform = format(random.uniform(1, 100), ".2f")
print(auniform)
print(buniform)
print(cuniform)