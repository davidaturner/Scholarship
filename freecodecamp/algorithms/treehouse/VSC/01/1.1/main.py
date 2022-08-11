# linear search
# ten numbers in sequential order.
# find a good algorithm ( O n ) to find the target
# listed IN the given list

#example
# list = [1,2,3,4,5,6,7,8,9,10]
# target = 10
# output = 9
def linear_search(list, target):

    print("List: ",list)
    print("I am thinking of a number Guess?")
    
    for i in range(len(list)):
        print("Is it", list[i], "?")
        if list[i] == target:
            print("Match Found!")
            return i
        print("Higher...")
    print(target, "Match not Found!")
    return -1

list = [1,2,3,4,5,6,7,8,9,10]
target = 0

out = linear_search(list, target)
print("Output: ",out)