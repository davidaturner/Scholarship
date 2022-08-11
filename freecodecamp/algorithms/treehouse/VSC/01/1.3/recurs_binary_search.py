# Time complexity: O log n
# Space complexity: O log n, since we are creating list objects for each recursion.

# Functional programming prefers recursion. Data never changes.
# Python prefers iterative programming. Recursions levels are limited.
def recursive_binary_search(list, target):
    if len(list) ==  0:
        return False
    else:
        midpoint = (len(list))//2 # div but take the floor int
        if list[midpoint] == target:
            return True
        else:
            # tail recursion. some languages optimize.
            if (list[midpoint]<target):
                return recursive_binary_search(list[midpoint+1:], target)
            else:
                return recursive_binary_search(list[:midpoint], target)

def verify(result):
    if (result == True):
        print("Match found!")
    else:
        print("Match not found.")

list = [1,2,3,4,5,6,7,8,9,10]
target = 10

# list = [2,5]
# target = 0
match_found = recursive_binary_search(list, target)
verify(match_found)

    
