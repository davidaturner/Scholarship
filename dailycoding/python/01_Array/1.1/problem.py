# import solution
from s1 import get_product_all_elements
# from s2 import get_product_all_elements
# from solution import get_product_all_elements

# review:
# Get product of all other elements

# Given an array of integers, return a new array such that each element at index i of 
# the new array is the product of all the numbers in the original array except the 
# one at i.

# assumptions:
# 1. input array contain only integer elements.
# 2. output array should have the same number of elements as input.
# 3. input array contains at least one integer, no more than five integers.
# 4. elements in the input array can be positive and not negative.

# examples:
arr1 = [1, 2, 3, 4, 5] 
result1 = [120, 60, 40, 30, 24]
arr2 = [3, 2, 1] 
result2 = [2, 3, 6]

# approach(es):
# s1. multiply all of the elements in the input to create a product then loop through
# through input dividing product into the each element and put result in output array.
# s2. loop through each element in the input creating a product of all elements in 
# input except the current element and put into the output array.

# code:
# outarr = get_product_all_element(inarr)

# test cases:
tc1 = {
    "input" : arr1,
    "output" : result1
}

tc2 = {
    "input" : arr2,
    "output" : result2
}

# def verify(tc, func, calculated):
#     print("*--------------------*")
#     print("Input:", tc["input"])
#     print("Running", func)
#     # calculated = get_product_all_elements(tc["input"])
#     print("Output:")
#     print("Calculated:",calculated)
#     expected = tc["output"]
#     print("Expeced:",expected)
#     print(calculated == expected)

def verify(tc, func, calculated):
    test_passed = calculated == tc["output"]
    print(f"Running: {func} Test Case: {tc['input']} {test_passed}")   

# testing
print("*--------------------*")
verify(tc1, f'"s2:get_product_all_element"', get_product_all_elements(tc1["input"]))
verify(tc2, f'"s2:get_product_all_element"', get_product_all_elements(tc2["input"]))
print("*--------------------*")