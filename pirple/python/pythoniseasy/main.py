# blackjack
from random import shuffle

class CardDeck:
    ScoringDict = { 
                    'A':[1, 11], '2': 2 , '3' : 3, '4' : 4,
                    '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9,
                    '10' : 10, 'J' : 10, 'Q' : 10, 'K' : 10                   
                    }
    def __init__(self):
        self.Deck = []
        self.CardsLeft = 52
        self.NeedsReset = 10
    def __repr__(self):
        return "CardsLeft : " + self.CardsLeft + " NeedsReset: " + self.NeedsReset + "\nDeck: " + self.Deck + "\n"
    def setNeedsReset(self, number):
        self.NeedsReset = number
    def reset(self):
        Deck = []
        a_suit = []
        facecards = ['A', 'J', 'Q', 'K']
        for card in range(2,11):
            a_suit.append(str(card))
        a_suit.extend(facecards)
        Deck.extend(a_suit*4)
        shuffle(Deck)
        shuffle(Deck)
        return Deck
    def score(self, hand):
        return false
    def reduce(self, card):
        return false
    def needsReset(self):
        return false

newdeck = CardDeck()
print(newdeck.reset())

class CardPlayer:
    def __init__(self):
        self.hand = []
        self.score = 0
        self.money = 0
    def __repr__(self):
        return "Hand: " + self.hand + " Score: " + self.score + " Money: " + self.money
    def getHand(self):
        return self.hand
    def setHand(self, hand):
        self.head = hand
    def getScore(self):
        return self.score
    def updateScore(self, score):
        self.score = score
    def getMoney(self):
        return self.money
    def updateMoney(self, money):
        self.money = money
