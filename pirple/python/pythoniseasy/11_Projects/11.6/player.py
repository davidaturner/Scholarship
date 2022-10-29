from xmlrpc.client import Boolean
from deck import CardDeck

class Player:
    def __init__(self, name, hand = [], money = 100):
        self.name = name
        self.hand = hand
        self.score = 0

        self.money = money
        # if betAmount not set- assume house or dealer
        self.betAmount = 0

    # print(Player)
    def __str__(self):
        return self.printHand()

    def printHand(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += card + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money) + " bet: " + str(self.betAmount)

    def printDealer(self):
        isHole = True
        currentHand = "hand: "
        for card in self.hand:
            if isHole == True:
                currentHand += "X" + " "
                isHole = False
            else:
                currentHand += card + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money) + " bet: " + str(self.betAmount)


    def isBusted(self):
        return self.score > 21

    def isBlackjack(self):
        return self.score == 21

    def isPushed(self, score):
        return self.score == score

    def isDealer(self):
        return self.betAmount == 0

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

deck = CardDeck().createDeck()
print(deck)

player1 = Player("bombom").clearHand()
player1.bet(20)
player1.hand = deck.drawHand(2)
player1.score = deck.scoreHand(player1.hand)
print(player1)

house = Player("house").clearHand()
house.hand = deck.drawHand(2)
house.score = deck.scoreHand(house.hand)
if house.isDealer() == True:
    print(house.printDealer())
else:
    print(house)

while player1.isBusted() == False and player1.isBlackjack() == False:
# while True:
    playerinput = input("Do you want another card? (y/n): ")
    if playerinput == "y":
        player1.hand.append(deck.draw())
        player1.score = deck.scoreHand(player1.hand)
        print(player1)
    else:
        break
if player1.isBusted():
    print("Player1 busts!")
else:
    print("Player1 is standing at " + str(player1.score) + ".")
print("Done!")

