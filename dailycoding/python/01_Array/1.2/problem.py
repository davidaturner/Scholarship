# 1.2 Locate smallest window to be sorted
# Given an array of integers that are out of order, determine the bounds 
# of the smallest window that must be sorted in order for the entire array 
# to be sorted.

# # Review the problem:
# Assumptions: 
# 1. array.length > 1.
# 2. array contains only integers.
# 3. starting array is assumed out of order.
# 4. input value is an array/list. 
# 5. output for python is a tuple.
# Signature: 
# result = locate_smallest_window_to_be_sorted(array_of_integers)

# # Examples:
# 1. Input: [3, 7, 5, 6, 9]
# Output: (1, 3)
# 2. Input: [3, 4, 1, 2, 8]
# Output: (0, 3)
# 3. Input: [5, 4, 1, 2, 3]
# Output: (0, 4)

## Approach:
# Normally I would consider starting with recursions than update it to
# a iterative solution. However, since python has extensive tools to
# create lists. I should be able to come up with the iterative solution
# first. I'd like to keep the performance under O(n2).

## Code:
# Determine smallest_val found in the input. 
# Determine largest_val found in the input.
# Testing:

# Optimization:

