is_hungry = True
is_cloudy = True
is_wanting_meat = False
is_wanting_pasta = True

# I wake up
# If I am hungry
# I eat breakfast
if is_hungry:
    print("I eat breakfast")

# I leave my house
# If it is cloudy
# I bring an umbrella
# Otherwise
# I bring sunglasses
if is_cloudy:
    print("I bring an umbrella")
else:
    print("I bring sunglasses")

# I go to a restaurant
# If I want meat
# I order steak
# Otherwise if I want pasta
# I order spaghetti and meatballs
# Otherwise
# I order a salad
if is_wanting_meat:
    print("I order steak")
elif is_wanting_pasta:
    print("I order spaghetti and meatballs")
else:
    print("I order salad")

is_male = True
is_tall = True
if is_male and is_tall:
    print("You are a tall male")
else:
    print("You are neither tall nor male")


def maxnum(num, num2, num3):
    if num >= num2 and num >= num3:
        return num
    elif num2 >= num and num2 >= num3:
        return num2
    else:
        return num3


print(maxnum(4, 6, 5))
