from random import shuffle

def createDeck():
    Deck = []
    for i in range(4):
        for card in range(2, 11):
            Deck.append(card)
        FaceValues = ["A", "J", "Q", "K"]
        for card in FaceValues:
            Deck.append(card)

    shuffle(Deck)
    return Deck

print(createDeck())