user = {
    "firstname" : "Joe",
    "lastname" : "Santos",
    "age" : 31,
    "married" : True,
    "locations" : ('NY', 'CT', 'DR', 'FL'),
    "wife" : {
        "firstname" : "Dora",
        "lastname" : "theExplorer",
        "age": 26,
        "stillMarried": True
    }
}

# print("With wife!")
# print(user)
# # delete wife
# del(user["wife"])
# print("Without wife!")
# print(user)

# print("Clear user!")
# print(user)
# user.clear()
# print("User cleared!")
# print(user)

# print("Delete user!")
# print(user)
# del(user)
# print("Deleted!")

#len
# print(len(user)) # six keys - firstname, lastname, age, married, location, wife
# print(len(user["wife"])) # four keys

#type
# print(type(user))
# print(type("user"))
# print(type(44))
# print(type(None))
# print(type(user["locations"]))
# print(type([1, 2, 3, 4, 5]))

#copy
# print(user)
# newUser = user.copy()
# newUser['firstname'] = "James"
# print(user['firstname'])
# print(newUser['firstname'])

#value
print(user.values())
user["color"] = "green" # add key
print(user)
print(user.values())
