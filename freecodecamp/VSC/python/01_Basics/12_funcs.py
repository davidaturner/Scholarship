# python function-- lowercase separated by underscore
def say_hi():
    print("Hello, User!")
    print("I'm fine!")


print("Top")
say_hi()
print("Bottom")


def say_hi_2(name, age):
    print("Hello, " + name + ", " + str(age) + "!")


say_hi_2("Joe", 32)

# add return statement


def cube(number):
    return number * number * number


print(cube(4))
result = cube(3)
print(result)
