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

print(user)
print(user['firstname'])

# Tuples cannot be altered or edited.
print(user['locations'])
print(user['locations'][1])

print(user['wife']['firstname'])
user['age'] += 1
print(user)


