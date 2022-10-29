from deck import CardDeck

class Player:
    def __init__(self, name, hand = [], money = 100):
        self.name = name
        self.hand = hand
        self.score = 0

        self.money = money
        self.betAmount = 0

    # print(Player)
    def __str__(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += card + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money) + " bet: " + str(self.betAmount)

    def addToHand(self, card):
        self.hand.append(card)
        return self

    # def scoreHand(self):
    #     # fix calculation of self.score > 21
    #     if self.score > 21:
    #         aces = 0
    #         for card in self.hand:
    #             if card == "A":
    #                 aces += 1
    #         while aces > 0 and self.score > 21:
    #             aces -= 1
    #             self.score -=10
    #     return self.score

    def isStanding(self):
        return self.score >= 17 

    def isBusted(self):
        return self.score > 21

    def clearHand(self):
        self.hand = []
        self.score = 0
        return self

    # do not label a variable the same as a function
    def bet(self, amount):
        self.money -= amount
        self.betAmount += amount
        # self.bet += amount
        return self

    def win(self, isWinner):
        if isWinner == True and self.score <= 21:
            # blackjack is score 21 with only two cards in the hand
            if self.score == 21 and len(self.hand) == 2:
                self.money += 2.5*self.betAmount
                return True
            else:
                self.money += 2*self.betAmount
                return True
        self.betAmount = 0
        return False

# def checkPlayer(pompom, newDeck):
#     if pompom.isStanding() == False:
#         print("pompom hits...")
#         newDeck.drawCard()
#         pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
#         pompom.scoreHand()
#         print(pompom)

deck = CardDeck().createDeck()
print(deck.cards)

player1 = Player("bombom").clearHand()
player1.bet(20)
player1.addToHand(deck.draw())
player1.addToHand(deck.draw())
player1.score = deck.scoreHand(player1.hand)
print(player1)

house = Player("house").clearHand()
print(house)

