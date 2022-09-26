# assume input is positive (>0)
def iterative_factorial(n):
    fact = 1
    for i in range(2, n+1):
        fact *= i
    return fact

def recurs_factorial(n):
    if n == 1:
        return n
    else:
        temp = recurs_factorial(n-1)
        temp = temp * n
    return temp




# my functions

# (circa 2007) The factorials for real negative (and imaginary?) numbers may be 
# defined by the integral equation, MathML. The factorials of negative real 
# numbers are complex numbers. At negative integers the imaginary part of 
# complex factorials is zero, and the factorials for -1, -2, -3, -4 are -1, 
# 2, -6, 24 respectively

def factorial_recursive(number):
    # if check_value(number) == False:
    #     return "Unable to calc"
    if number <= 1:
        return number
    return number * factorial_recursive(number-1)

def factorial_iterative(number):
    # if check_value(number) == False:
    #     return "Unable to calc"
    result = 1
    for i in range(1,number+1):
        result *= i
    return result

def check_value(number):
    return type(number) == int and number >= 0

# print(check_value(0))
# print(factorial_recursive(5))
for i in range(5):
    print(recurs_factorial(i+1))