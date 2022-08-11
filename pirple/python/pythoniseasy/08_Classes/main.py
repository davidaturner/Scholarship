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
    def __repr__(self):
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
    def __repr__(self):
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

class Cat(Pet):
    def __init__(self, name, speak, playful, favoriteplace):
        Pet.__init__(self, name, speak)
        self.playful = playful
        self.favoriteplace = favoriteplace
    def setToPlay(self):
        self.playful = True
    def setToSit(self):
        self.playful = False
    def wantsToSit(self):
        if self.playful == True:
            print(self.Name + " wants to play")
        else:
            print(self.Name + " wants to sit on the " + self.favoriteplace)


pootie = Cat("Pootie", "Meow!", True, "Refrigerator")
print(pootie)
pootie.wantsToSit()
pootie.setToSit()
pootie.wantsToSit()

# carly = Dog("Carly", "Bark!", "Doberman", "Chewtoy")
# print("Creating... ",carly.Name)
# print(carly)
# carly.setToPlay()
# carly.wantsToPlay()
# print("Sometime later...")
# carly.setToNotPlay()
# carly.wantsToPlay()


# class Cat(Pet):
#     def __init__(self, name, speak, play):
#         Pet.__init__(self, name, speak, play)


# pugh = Cat("Pugh", "Meow!")
# print(pugh.getName())
# print(pugh.getSpeak())