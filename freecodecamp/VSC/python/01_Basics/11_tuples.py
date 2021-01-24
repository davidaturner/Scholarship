# tuples are immutable
# good for storing data
coordinate = (4, 5)
print(coordinate)
print(coordinate[0])
print(coordinate[1])

# vs

# list
difference = [4, 5]
print(difference)
print(difference[0])
print(difference[1])
difference[0] = 16
print(difference)
