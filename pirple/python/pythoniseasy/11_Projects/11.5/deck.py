from random import shuffle

class CardDeck:
    FACE_CARDS_DICT = {"A":11, "J":10, "Q":10, "K":10}
    NUMBER_CARDS_LIST = range(2, 11)
    def __init__(self):
        self.cards = []
        # self.drawn = ""
        # self.drawnScore = 0

    # for print Deck
    def __str__(self):
        i = 0
        cards = "["
        for card in self.cards:
            cards += "'" + card + "'"
            if (i == len(self.cards)-1):
                break
            i += 1
            cards += ", "
        cards += "]"
        return cards

    def createDeck(self):
        Deck = []
        for i in range(4):
            for card in self.NUMBER_CARDS_LIST:
                Deck.append(str(card))
            for card in self.FACE_CARDS_DICT.keys():
                Deck.append(card)
        shuffle(Deck)
        self.cards = Deck
        return self

    def draw(self):
        return str(self.cards.pop())

    # def drawCard(self, card):
    #     self.drawn = str(card)
    #     self.drawnScore = self.scoreCard(self.drawn)
    #     return self

    def scoreHand(self, hand):
        score = 0
        aces = 0
        for card in hand:
            if card == "A":
                aces += 1
            # fix calculation of self.score
            score += self.scoreCard(card)
        while aces >= 1 and score > 21:
            aces -= 1
            score -=10
        return score

    def scoreCard(self, card):
        if card in self.FACE_CARDS_DICT:
            return self.FACE_CARDS_DICT[card]
        if int(card) in self.NUMBER_CARDS_LIST:
            return int(card)

deck = CardDeck().createDeck()
print(deck)
hand = ['K', 'Q', 'A', 'A']
print(hand)
score = deck.scoreHand(hand)
print(score)

