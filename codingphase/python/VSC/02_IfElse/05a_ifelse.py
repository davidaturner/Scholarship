age = 21
# if else example
if age >= 18:                           # code block
    print("You are in to the club.")        # must indent
else:                                   # code block
    print("Sorry you are not old enough to get in")  # must indent

# nested if else example
if age < 17:
    print("You MAY need to be accompanied by a parent for this movie")
    if age < 12:
        print("General admission only. Where your parent?")
    else:
        print("You may see without pariental supervision. Still having a parent would help")
else:
    print("Welcome to the show!")

# if elif else example
if age < 12:
    print("I like chocolate")
elif age < 40:
    print("I\'d like to have a cappuccino please")
elif age < 65:
    print("I want spring water")
else:
    print("Wha? What am I doing here?")

# ternary operator
print("Old") if age >= 18 else print("Young")
# age >= 18 ? print("Old"): print("Young") # causes an error
agecheck = age >= 18
print("Old") if agecheck else print("Young")
