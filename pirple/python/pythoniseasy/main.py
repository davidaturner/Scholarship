# blackjack
from random import shuffle
from random import randint

class CardDeck:
    ScoringDict = { 
                    'A':[1, 11], '2': 2 , '3' : 3, '4' : 4,
                    '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9,
                    '10' : 10, 'J' : 10, 'Q' : 10, 'K' : 10                   
                    }
    def __init__(self):
        self.Deck = []
        self.CardsLeft = 52
    def __repr__(self):
        return "CardsLeft : " + self.CardsLeft + " NeedsReset: " + self.NeedsReset + "\nDeck: " + self.Deck + "\n"
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
    def hit(self, hand):
        if (hand == []):
            return randint(0, 51)
        else:
            notDup = False
            while notDup == False:
                card = randint(0, 51)
                notDup = True
                for h in hand:
                    if card == h:
                        notDup = False
                if notDup == True:
                    return card
    def score(self, hand):
        return False

# newdeck = CardDeck()
# print(newdeck.reset())

class CardPlayer:
    def __init__(self):
        self.hand = []
        self.score = 0
        self.money = 0
    def __repr__(self):
        return "Hand: " + self.hand + " Score: " + self.score + " Money: " + self.money

    def dealHand(self, cardDeck):
        self.hand = []
        self.hand.append(cardDeck.hit(self.hand))
        self.hand.append(cardDeck.hit(self.hand))
        return self.hand

me = CardPlayer()
myDeck = CardDeck()
me.dealHand(myDeck)
me.score = 5
me.money = 100

print(me.hand)
