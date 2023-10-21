lucky_numbers = [2, 15, 26, 33, 76]
friends = ["Steve", "Carl", "Tevin", "Marcie", "Patricia"]
print(friends)
# copy
friends2 = friends.copy()

# extend
friends.extend(["Carly", "Simon"])
print(friends)

# append
friends.append("Dodder")
print(friends)

#court
print(friends.count("Doddex"))

# insert
# friends.insert(2, ["Lonnie", "Samuel"])
# print(friends)

# remove
friends.remove("Simon")
print(friends)

# index
print(friends.index("Dodder"))

friends.sort()
print(friends)

print(friends2)
friends2.reverse()

print(friends2)
print(friends2.pop())
print(friends2)




