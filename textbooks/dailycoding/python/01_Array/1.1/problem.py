from verify import verify
from s1 import get_product_all_elements

# Get product of all other elements

# Given an array of integers, return a new array such that each element at index i of 
# the new array is the product of aall the numbers in the original array except the 
# one at i.

# examples:
# arr1 = [1, 2, 3, 4, 5] result = [120, 60, 40, 30, 24]
# arr2 = [3, 2, 1] result = [2, 3, 6]

tc1 = {
    "input" : [1, 2, 3, 4, 5],
    "output" : [120, 60, 40, 30, 24]
}
# print(tc1["input"])
# print(tc1["output"])

tc2 = {
    "input" : [3, 2, 1],
    "output" : [2, 3, 6]
}
# print(tc2["input"])
# print(tc2["output"])

verify(tc1, "\"get_product_all_element\"", get_product_all_elements(tc1["input"]))
verify(tc2, "\"get_product_all_element\"", get_product_all_elements(tc2["input"]))