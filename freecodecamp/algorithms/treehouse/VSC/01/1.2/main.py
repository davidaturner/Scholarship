# binary search
# ten numbers in a list in sequential order
# target
# return the index if match in the list with target
def binary_search(list, target):
    print(list, "target:", target)

    start = 0
    end = len(list) - 1
    # print("Start:",start,"End:",end)

    print("I am thinking of a number in the list. Guess?")
    while start <= end:

        # cases that break the loop
        if start == end:
            print("Is it ", list[start], "?")
            if list[start] == target:
                # print("Match found!")
                print("Correct! The number is ", target)
                return start
            else:
                # print("Match not found.")
                print("Sadly! The number is not the list.")
                return -1
        midpoint = int((start + end)/2)
        print("Is it ", list[midpoint], "?")
        if list[midpoint] == target:
            print("Correct! The number is ", target)
            return midpoint

        if list[midpoint] < target:
            print("Higher...")
            start = midpoint + 1
            if start > len(list)-1:
                start = len(list) - 1
            print("Start:",start,"End:",end)
        if list[midpoint] > target:
            print("Lower...")
            end = midpoint - 1
            if end < 0:
                end = 0
            # print("Start:",start,"End:",end)

list = [1,2,3,4,5,6,7,8,9,10]
print(list)

target = int(input("Enter target: "))
while target in list:
    bsout = binary_search(list, target)
    print("Output:",bsout)
    target = int(input("Enter target: "))
