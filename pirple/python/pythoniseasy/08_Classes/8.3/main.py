# Class template

# class ClassName:
#     def __init__(self): #this overrides the base __init__
#         self.attribute = 0

#     def AFunction(self):
#         action(s)

class Pet:
    def __init__(self, name, speak="Silent"):
        self.Name = name
        self.Speak = speak
    # ToString()
    def __str__(self):
        return "Name: " + self.Name + ", Speak: " + self.Speak

arby = Pet("Arby")
print("Creating... " + arby.Name)
print(arby.Speak)
arby.Speak = "Can talk!"
print(arby)

