# Class template

# class ClassName:
#     def __init__(self): #this overrides the base __init__
#         self.attribute = 0

#     def AFunction(self):
#         action(s)

class Team:
    # def __init__(self):
    #    self.Name = "NaN"
    #    self.Location = "NaN"
    def __init__(self, name = "NaN", location = "NaN"):
        self.Name = name
        self.Location = location
    def SetName(self, name):
        self.Name = name
    def SetLocation(self, location):
        self.Location = location

# Example1 = Team()
Example1 = Team("Cubs", "Chicago")
Example2 = Team()

print(Example1.Name)
print(Example1.Location)

Example1.SetName("Pirates")
Example1.SetLocation("Pittsburgh")

print(Example1.Name)
print(Example1.Location)

print("Other Team: Unspecified")
print(Example2.Name)
print(Example2.Location)
