
# Time complexity: O log n
# Space complexity: O 1, since we simply move pointers; we need no further mem usage.
def binary_search(list, target):
    match_found = False
    if len(list) ==  0:
        return False
    else:
        start = 0
        end = len(list)-1

        while(start<=end):
            midpoint = (start+end)//2
            if list[midpoint] == target:
                match_found = True
                break
            else:
                if list[midpoint] < target:
                    start = midpoint + 1
                else:
                    end = midpoint - 1
    return match_found

def verify(result):
    if (result == True):
        print("Match found!")
    else:
        print("Match not found.")

list = [1,2,3,4,5,6,7,8,9,10]
target = 7

# test: Wrong Answer: True
# list = [2,5]
# target = 0
match_found = binary_search(list, target)
verify(match_found)
