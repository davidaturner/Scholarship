# Problem:
# Given an array of integers, return a new array such that each element at 
# index i of the new array is the product of al the numbers in original array 
# except the one at i. Follow up: Don't use division.
#
# Input: an array of integers
# Output: an array of integers
# Examples:
test1_array = [1, 2, 3]
test1_result = [6, 3, 2]

test2_array = [1, 2, 3, 4, 5]
test2_result = [60, 30, 20, 15, 12]

# Questions:
# 1. Can the numbers in the array be zero or negative?
# 2. Can elements in the array be non integer?
# 3. Can elements in the array be non numbers?
# 4. Can the array consist of only one number?
# 5. Can the array consist of two numbers?
# 6. Can the array be empty?

# Approach:
# Challenge to do this without using division.
# Good news is that we don't have to deal with a divide by zero.
# Goal would be to keep time complexity to O 2n or simply, linear time.

# Abstraction:
def product_of_all_numbers_except_current(array):
    pass

# Testcases:
tests = []
tests.append({
    'input' : {
        'array': [1, 2, 3]
    },
    'output' : {
        'result' : [6, 3, 2]
    }
})
tests.append({
    'input' : {
        'array': [1, 2, 3, 4, 5]
    },
    'output' : {
        'result' : [60, 30, 20, 15, 12]
    }
})

for i in range(len(tests)):
    verify = product_of_all_numbers_except_current(**tests[i]['input']) == tests[i]['output']
    # verify = product_of_all_numbers_except_current(tests[i]['input']['array']) == tests[i]['output']['result']
    print(verify)