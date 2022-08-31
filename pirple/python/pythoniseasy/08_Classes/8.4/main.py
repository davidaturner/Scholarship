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

# arby = Pet("Arby")
# print("Creating... " + arby.Name)
# print(arby.Speak)
# arby.Speak = "Can talk!"
# print(arby)


class Dog(Pet):
    def __init__(self, name, speak, breed, favoriteToy):
        Pet.__init__(self, name, speak)
        self.Breed = breed
        self.FavoriteToy = favoriteToy
        self.Playful = False
    # ToString()
    def __str__(self):
        return Pet.__str__(self) + ", Breed: " + self.Breed + ", FavoriteToy: " + self.FavoriteToy
        # return "Name: " + self.Name + ", Speak: " + self.Speak + ", Breed: " + self.Breed + ", FavoriteToy: " + self.FavoriteToy
    def setToPlay(self):
        self.Playful = True 
    def setToNotPlay(self):
        self.Playful = False
    def wantsToPlay(self):
        if self.Playful == True:
            print(self.Name + " wants to play")
        else:
            print(self.Name + " doesn't want to play")

carly = Dog("Carly", "Bark!", "Doberman", "Chewtoy")
print("Creating... ",carly.Name)
print(carly)
carly.setToPlay()
carly.wantsToPlay()
print("Sometime later...")
carly.setToNotPlay()
carly.wantsToPlay()


# class Cat(Pet):
#     def __init__(self, name, speak, play):
#         Pet.__init__(self, name, speak, play)


# pugh = Cat("Pugh", "Meow!")
# print(pugh.getName())
# print(pugh.getSpeak())