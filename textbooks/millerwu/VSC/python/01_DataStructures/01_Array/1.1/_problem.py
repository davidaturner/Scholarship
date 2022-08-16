# Problem solving during an Coding Interview.

# Using REACTO.
# 1. Review the problem.
# 2. Give examples.
# 3. Explain the approach to solving the problem.
# 4. Code the solution.
# 5. Test the solution.
# 6. Optimize the solution.

# 1. Review the problem
# Given an array of integers, return a new array such that each element at 
# index i of the new array is the product of all the numbers in the original 
# array except the one at i.
# Follow up: Do not use division.
# Input: an array or list
# Output: an array or list
# Function Name: product_of_all_the_numbers(integers), returns a list

#2. Give examples.
# If the input was [1, 2, 3, 4, 5], the expected output [120, 60, 40, 30, 24]
# If the input was [1, 2, 3], the expected output [6, 3, 2]

# 3. Explain the approach.
# The easiest approach is to use division in building the output list. 
# For the sake of time, I will work on creating a more efficient, more maintainable
# solution that does not use division. A set of testcases will be developed BEFORE
# coding. The two examples given will be almong them.
# Testcase 1: Given example 1.
# Testcase 2: Given example 2.
# Question :  Can the input listing contain a zero?
# Question :  Can the input listing contain a negative number?
# Question :  Can the input listing contain float value(s)?
# Question :  Can the input listing have duplicate values?
# Question :  Can the input listing be two different positive numbers?
# Question :  Can the input listing be two numbers of the same positive value?
# Question :  Can the input listing contain a single positive integer?
# Question :  Can the input listing contain a single integer, a zero?
# Question :  Can the input listing be empty?
# Question :


#4. Code the solution
# Describing a function from input to output.
# For input value: 1, the output would be 2 * 3 * 4 * 5 = 120
# For input value: 2, the output would be 1 * 3 * 4 * 5 = 60
# For input value: 3, the output would be 1 * 2 * 4 * 5 = 40
# For input value: 4, the output would be 1 * 2 * 3 * 5 = 30
# For input value: 5, the output would be 1 * 2 * 3 * 4 = 24
# Check this solution does not require division. Good!
