# List in Python acts just like an Array in other languages.
# But List in Python is just an Array of (continguous references to
#   non continguous data.
new_list = [1,2,3,4,5]
result = new_list[0]

if result == 1 : print(result)

numbers = []
print(len(numbers))

# Three ways to add data to List.
# insert
# append
# extend

# insert 1 into numbers
# O 1
numbers = [1]
print(numbers)

# insert 3 into first position of numbers
# O n runtime
# in python it doubles space requirements when needed.
numbers.insert(0, 3)
print(numbers)

# append 2 into numbers
# depending on implementation can be O 1 (since added to end)
# in python it doubles space requirements when needed.
numbers.append(2)
print(numbers)

# extend numbers by alternate list
# O k where k is the length of the alternate list.
# each alternate element is appended to numbers.
alternate = [4,5,6]
numbers.extend(alternate)
print(numbers)

# delete
# O n runtime.
