from random import choice
from random import shuffle


myChoices = [1, 2, 3, 55, 67, 500]

print(choice(myChoices))
print(choice(myChoices))
print(choice(myChoices))
print(choice(myChoices))
print(choice(myChoices))

myCardsPlease = ["Ace", "Ten", "Jack", "Queen", "King"]
print(myCardsPlease)
shuffle(myCardsPlease)
print(myCardsPlease)
shuffle(myCardsPlease)
print(myCardsPlease)

