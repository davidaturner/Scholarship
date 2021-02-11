# Arrays in Python are called Lists.
number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

# row then col
print(number_grid[0])
print(number_grid[0][1])

for element in number_grid:
    print(element)

# nested for
for element in number_grid:
    for number in element:
        print(number)
