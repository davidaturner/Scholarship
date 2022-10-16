from deck import CardDeck

class Player:
    def __init__(self, name, hand = [], money = 100):
        self.name = name
        self.hand = hand
        self.money = money
        self.score = 0
        self.betAmount = 0

    # print(Player)
    def __str__(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += card + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money) + " bet: " + str(self.betAmount)

    def addToHand(self, card, score):
        self.hand.append(card)
        self.score += score
        return self

    def scoreHand(self):
        # fix calculation of self.score > 21
        if self.score > 21:
            aces = 0
            for card in self.hand:
                if card == "A":
                    aces += 1
            while aces > 0 and self.score > 21:
                aces -= 1
                self.score -=10
        return self.score

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

def checkPlayer(pompom, newDeck):
    if pompom.isStanding() == False:
        print("pompom hits...")
        newDeck.drawCard()
        pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
        pompom.scoreHand()
        print(pompom)

newDeck = CardDeck().createDeck()
print(newDeck.cards)
print("new deal...")
pompom = Player("pompom").clearHand()
print("pompom bets...")
pompom.bet(20)
print(pompom)

print("dealer deals two cards...")
newDeck.drawCard()
pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
print(pompom)
newDeck.drawCard()
pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
pompom.scoreHand()
print(pompom)

checkPlayer(pompom, newDeck)
# if pompom.isStanding() == False:
#     print("pompom hits...")
#     newDeck.drawCard()
#     pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
#     pompom.scoreHand()
#     print(pompom)

checkPlayer(pompom, newDeck)
# if pompom.isStanding() == False:
#     print("pompom hit...")
#     newDeck.drawCard()
#     pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
#     pompom.scoreHand()
#     print(pompom)

checkPlayer(pompom, newDeck)
# if pompom.isStanding() == False:
#     print("pompom hits...")
#     newDeck.drawCard()
#     pompom.addToHand(newDeck.drawn, newDeck.drawnScore)
#     pompom.scoreHand()
#     print(pompom)

if pompom.isBusted():
    print("pompom is busted!")
else:
    print("pompom stands!")

if (pompom.win(True)):
    print("pompom wins!")
else:
    print("pompom loses...")
print(pompom)


            


