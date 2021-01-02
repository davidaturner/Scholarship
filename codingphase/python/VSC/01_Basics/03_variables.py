age = 31
print(age)
age += 5
print(age)

userName = "Joe"  # camel case
print(userName)
user_name = "Joel"  # snake case - preferred
print(user_name)

__user_location__ = "CT"  # important! do not update.
print(__user_location__)
USER_LOCATION = "CT"  # consider a constant
print(USER_LOCATION)

# python's null is None
mother = None
print(mother)

user_name = input("What is your name? ")
user_location = input("Where do you live? ")
user_age = input("How old are you? ")
print(f"\n{user_name} is {user_age} years old and lives in {user_location}.\n")
