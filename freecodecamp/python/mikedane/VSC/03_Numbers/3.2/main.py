#exponential function (homestyle)
def exponential(num, exponent):
    if num == 0:
        return 0
    elif exponent == 0:
        return 1
    elif exponent == 1:
        return num
    else:
        result = 1
        for i in range(exponent):
            result *= num
        return result
    # return num**exponent

print(exponential(0, 3))
print(exponential(2, 3))
print(exponential(3, 0))
print(exponential(2, 1))
print(exponential(-3, 3))
print(exponential(3, 4))