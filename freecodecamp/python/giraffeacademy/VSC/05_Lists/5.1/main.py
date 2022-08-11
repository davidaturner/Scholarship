#Lists
friends = ["David", "Karen", "Thomas", 47, True]
print(friends)
for friend in friends:
    print(f'{friend} ')

print(f'{friends[1]}')

print(f'{friends[-1]}')

print(f'{friends[1:3]}')

friends[1] = "Marcy"

print(f'{friends[:3]}')