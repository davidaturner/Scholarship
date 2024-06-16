import random
# class Hat:
#     def __init__(self):
#         self.houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
#     # def sort(self, name):
#     #     print(name, "is in", "some house")
#     def sort(self, name):
#         print(name, "is in", random.choice(self.houses))

# a class without a self reference, all programming refers to class (cls) itself
class Hat:
    houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    @classmethod
    def sort(cls, name):
        print(name, "is in", random.choice(cls.houses))

# hat = Hat()
# hat.sort("Harry")
Hat.sort("Harry")

# Note: the class is unnecessary but sometimes it makes sense think in terms
# of encapsulating data and functions.