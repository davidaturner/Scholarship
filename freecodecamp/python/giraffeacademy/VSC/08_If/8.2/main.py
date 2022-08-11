is_male = False
is_tall = False

# if is_male or is_tall:
#     print("You are are male or you are tall or both.")
# else:
#     print("You are neither male nor tall.")

if is_male and is_tall:
    print("You are are male and tall.")
elif is_male and not is_tall:
    print("You are a small male.")
elif not is_male and is_tall:
    print("You are not a male but you are tall.")
else:
    print("You are neither male nor tall.")