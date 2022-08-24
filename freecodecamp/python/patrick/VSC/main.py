myList = ["Apple", "Orange", "Cucumber"]
print(myList)

# Actual list constructor
myList2 = list()
print(myList2)

myList2 = [5, True, "apple", "apple"]
print(myList2)

# item0 = myList[0]
# print(item0)
# item1 = myList[1]
# print(item1)
# item2 = myList[2]
# print(item2)
# try:
#     item3 = myList[3]
# except Exception as e:
#     print(f"Exception: {e}")
# item_1 = myList[-1]
# print(item_1)
# item_2 = myList[-2]
# print(item_2)

# for x in myList:
#     print(x)

# if "Cucumber" in myList:
#     print(True)
# else:
#     print(False)

# myList.append('Banana')
# print(myList)
# myList.insert(1, "Blueberry")
# print(myList)
# myList.extend(myList2)
# # myList.push("Kumquat") #python has no push(). WTF???
# # print(myList)
# item = myList.pop()
# print(item)
# print(myList)
# myList.remove("Apple")
# print(myList)

#ok for a fake Stack (no push; because we have append())?
# myList3 = []
# print(myList3)
# myList3.append(1)
# print(myList3)
# myList3.append(2)
# print(myList3)
# myList3.append(3)
# print(myList3)
# myList3.pop()
# print(myList3)
# myList3.pop()
# print(myList3)

# myList2.reverse()
# print(myList2)
# myList2.reverse()

myList4 = [2, 13, 24, 22, 1, 1]
print(myList4)
# myList4.sort() # permanent sort of numbers.
# print(myList4)
# myList4.clear()
# myList4 = [2, 13, 24, 22, 1, 1]
# sorted = sorted(myList4)
# print(sorted)
# print(myList4)

# slicing
# a = myList4[3:5]
# print(a)
# popped = myList4[-1]
# print(popped)

myList = ["Apple", "Orange", "Cucumber"]
print(myList)
# myList_cpy = myList
# myList_cpy.append('Lemon')
# print(myList_cpy)
# print(myList)
# # true copies
# myList_clone = myList.copy()
# # myList_clone = list(myList)
# # myList_clone = myList[:]

# myList_clone.insert(1, "Blueberry")
# print(myList_clone)
# print(myList)

#list comprehension
myList5 = [1, 2, 3, 4, 5]
print(myList5)
comprendo = [i*i for i in myList5]
print(comprendo)


