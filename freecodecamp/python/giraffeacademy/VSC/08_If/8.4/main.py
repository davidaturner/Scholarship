# Comparison
# ==, !=, >, <, >=, <=

def max_num(num1, num2, num3):
    if (num1 >= num2 and num1 >= num3):
        return num1
    elif (num2 >= num1 and num2 >= num3):
        return num2
    else:
        return num3

def max_num_list(numbers):
    max_num = 0
    for num in numbers:
        if (max_num < int(num)):
            max_num = int(num)
    return max_num

print(max_num(13, 4, 5))
print(max_num(3, 14, 5))
print(max_num(3, 4, 5))

numbers = [1, 265, 13, 4, 5]
print(max_num_list(numbers))

