# list: ordered, mutable, allows duplication.

list1 = ["Apple", "Orange", "Bananas"]
print(list1)

# list2 = list()
# print(list2)

# list3 = [5, True, "Apple", True]
# print(list3)

# print(list1[0])
# print(list1[1])
# print(list1[2])
# print(list1[-1])
# print(list1[-2])

for x in list1:
    print(x)

# if "Apple" in list1:
#     print("True")
# else:
#     print("False")

# if "Apicot" in list1:
#     print("True")
# else:
#     print("False")

# print(len(list1))

# list1.append('Lemon')
# print(len(list1))

# list1.insert(1, "Blueberry")
# print(list1)

# item = list1.pop()
# print(item)
# print(list1)

# list1.remove("Orange")
# print(list1)

list1.reverse()
print(list1)

# list1.clear()
# print(list1)

list4 = [25, 0, 4, -1, -5, 1333]
print(list4)
# list4.sort()
# print(list4)

# list5 = sorted(list4)
# print(list4)
# print(list5)

# list6 = [7] * 5
# print(list6)

# list6 = list6 + list1
# print(list6)

list10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
# print(list10)
# print(list10[3:6])
# print(list10[:8])
# print(list10[4:])
# print(list10[4::2])
# print(list10[::-1])

list_org = list10
# list_org.append('11')     #update list10
# list_org = list_org + [11]  #does not update list10
# print(list10)
# print(list_org)

# list_cpy1 = list_org.copy() #copy method: copy()
# print(list_cpy1)
# list_cpy2 = list(list_org)  #copy method: list()
# print(list_cpy2)
# list_cpy3 = list_org[:]   #copy method: [:]
# print(list_cpy3)

b = [i*i for i in list4]    #list comprehension
print(b)