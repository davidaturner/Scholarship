# Problem:
# We need to write a program to find the position of a given number in
# a list of numbers arranged in decreasing order. We also need to minimize
# the number of times we access elements in the list. 

# Input:
# 1. cards - a list of numbers sorted in decreasing order.
# 2. query - a number, whose position is to be determined.

# Output:
# 1. position - the position of the query in the list cards

# Questions:
# 1. Can the query not be on the list?
# 2. Can either numbers in the list or the query be not a number values?
# 3. Can either numbers in the list or the query be non-integer values?
# 4. Can either numbers in the list or the query be zero or negative int values?
# 5. Can we still determine if one number in the list is out of order?

# abstraction
def locate_card(cards, query):
    pass

# Example:
# cards = [13, 11, 12, 7, 4, 3, 1, 0]
# query = 7
# position = 3
tests = []
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

#snippets
# print(test["input"])
# print(test["input"]["cards"])
# print(test["input"]["cards"][3])

# function to run test
verify = locate_card(tests[0]['input']['cards'], tests[0]['input']['query']) == tests[0]['output']
#shorthand
# verify locate_card(**tests[0]['input']) == test[0]['output']
print(verify)

# Other scenarios to test:
# 1. query is the first element in the list cards 
# 2. query is the last elemenet in the list cards 
# 3. query is not in list cards
# 4. the list cards carry only one card, the query
# 5. the list cards is empty 
# 6. the list cards have repeating numbers, only one query 
# 7. the list cards have repeating numbers of the query



