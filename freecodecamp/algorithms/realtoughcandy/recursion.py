def factorial_1(number):
    if number <= 1:
        return number

    return number * factorial_1(number-1)

   
number_of_values = 5
for i in range(1,number_of_values + 1):
    print(factorial_1(i))
    # print(i)

# def helloworld(string):
#     print(f"Hello, {string}")
#     # print("Hello,", string)

# helloworld('Mary!')

