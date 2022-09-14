#tuples - ordered, cannot be changed once created. used to keep related things ordered.
import timeit

tuple1 = "Max", "Baer", 29
print(tuple1)
print(type(tuple1))

# tuple2 = ("Max", "Baer", 29)
# print(tuple2)
# print(type(tuple2))

# tuple3 = (["Max", "Baer", 29])
# print(tuple3)
# print(type(tuple3))   # typeof list

# tuple4 = tuple(["Max", "Baer", 29])
# print(tuple4)
# print(type(tuple4))   # typeof tuple

# print(tuple1[0])
# print(tuple1[1])
# print(tuple1[2])
# print(tuple1[1:2])
# item = tuple1[1:2]
# print(item)
# print(tuple1[:2])
# print(tuple1[1:])
# print(tuple1[::2])
# print(tuple1[::-1])

# for i in tuple1:
#     print(i)

# if "Max" in tuple1:
#     print("Max found")
# else:
#     print("Max not found")

tuple6 = tuple(['a', 'p', 'p', 'l', 'e'])
# tuple6 = tuple('a', 'p', 'p', 'l', 'e') #error tuple takes only 1 arg.
print(tuple6)
# print(len(tuple6))
# print(tuple6.count('p'))
# print(tuple6.index('l'))

# deconstruction: requires all elements be unpacked.
first, second, third, four, five = tuple6
print(first)
print(second)
print(third)
print(four)
print(five)

list1 = list(tuple6)
print(list1)
lfirst, lsecond, lthird, lfourth, lfifth = list1
print(lfirst)
print(lsecond)

# amount of time to measure creating a list and a tuple
print(timeit.timeit(stmt="[0,1,2,3,4,5]",number=10000)) #0.0042
print(timeit.timeit(stmt="(0,1,2,3,4,5)",number=10000)) #0.0007