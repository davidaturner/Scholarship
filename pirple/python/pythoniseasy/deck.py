from random import shuffle

class CardDeck:
    FACE_CARDS_DICT = {"A":11, "J":10, "Q":10, "K":10}
    NUMBER_CARDS_LIST = range(2, 10)
    def __init__(self):
        self.cards = []
        self.drawn = ""
        self.drawnScore = 0

    # for print Deck
    def __str__(self):
        return self.cards + " Card: " + self.drawn + " Score: "+ self.drawnScore

    def createDeck(self):
        Deck = []
        for i in range(4):
            for card in self.NUMBER_CARDS_LIST:
            # for card in range(2, 11):
                Deck.append(str(card))
            for card in self.FACE_CARDS_DICT.keys():
            # FaceValues = ["A", "J", "Q", "K"]
            # for card in FaceValues:
                Deck.append(card)
        shuffle(Deck)
        self.cards = Deck
        return self

    def drawCard(self):
        self.drawn = str(self.cards.pop())
        self.drawnScore = self.score(self.drawn)
        return self

    def draw(self, card):
        self.drawn = str(card)
        self.drawnScore = self.score(self.drawn)
        return self

    def score(self, card):
        if card in self.FACE_CARDS_DICT:
            return self.FACE_CARDS_DICT[card]
        if int(card) in self.NUMBER_CARDS_LIST:
            return int(card)

    def scoreHand(self, hand):
        score = 0
        # FaceCardsDict = {"A":11, "J":10, "Q":10, "K":10}
        aces = 0
        for card in hand:
            if card == "A":
                aces += 1
            # fix calculation of self.score
            score += self.score(card)
            # if card in self.FaceCardsDict:
            #     self.score += FaceCardsDict[card]
            # elif int(card) >= 2 and int(card) <= 9:
            #     self.score += int(card)
        while aces >= 1 and score > 21:
            aces -= 1
            score -=10
        return score

